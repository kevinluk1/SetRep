import * as workouts from "./workout_model.mjs";
import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());


app.post("/exercises", (req, res) => {
  workouts
    .mongooseCreate(
      req.body.name,
      req.body.reps,
      req.body.weight,
      req.body.unit,
      req.body.date
    )
    .then((workout) => res.status(201).json(workout))
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error,
        object: [
          req.body.name,
          req.body.reps,
          req.body.weight,
          req.body.unit,
          req.body.date,
        ],
      });
    });
});

app.get("/exercises", (req, res) => {
  workouts
    .mongooseRetrieveAll()
    .then((workout_results) => res.send(workout_results)) // .send(parameter) -- When the parameter is an Array or Object, Express responds with the JSON representation.
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error,
        object: [
          req.body.name,
          req.body.reps,
          req.body.weight,
          req.body.unit,
          req.body.date,
        ],
      });
    });
});

app.put("/exercises/:id", (req, res) => {


  workouts
    .mongooseUpdate(
      req.params.id,
      req.body.name,
      req.body.reps,
      req.body.weight,
      req.body.unit,
      req.body.date
    )

    .then((result) => {
      if (result === 1) {
        res.json({
          id: req.params.id,
          name: req.body.name,
          reps: req.body.reps,
          weight: req.body.weight,
          unit: req.body.unit,
          date: req.body.date,
        });
      } else {
        res.send("Property Matched, but nothing was updated");
      }
    })
    .catch((error) => {
      console.error(error);
      console.log(error);
      res.status(500).json({
        error,
        object: [
          req.body.name,
          req.body.reps,
          req.body.weight,
          req.body.unit,
          req.body.date,
        ],
      });
    });
});

app.delete("/exercises/:id", (req, res) => {
  workouts
    .mongooseDelete(req.params.id)
    .then((result) => {
      if (result === 1) {
        res.status(204).send(); // 204 returns nothing
      } else res.status(404).json({ Error: "Resource not found" }); // Send
      // object converted to JSON
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error,
        object: [
          req.body.name,
          req.body.reps,
          req.body.weight,
          req.body.unit,
          req.body.date,
        ],
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
