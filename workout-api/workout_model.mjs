import mongoose from "mongoose";

/**
 * Connect to the MongoDB we created using Mongo CLI commands
 * The DB will not appear in the CLI or MongoDB Compass until a
 * document(table) is created
 */

mongoose.connect("mongodb://localhost:27017/workout_db", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

/**
 * Defines the schema (columns/properties) of each _id (row)that will be
 * added
 */
const workoutSchema = mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true },
  date: { type: String, required: true },
});

/**
 * Defines a Mongoose 'model' named Workout that uses the schema,
 * 'workoutSchema'
 */
const Workout = mongoose.model("Workout", workoutSchema);

/**
 * mongooseCreate will be called in workout_controller.mjs
 * @param name
 * @param reps
 * @param weight
 * @param unit
 * @param date
 * @returns {Promise<void>}
 */

const mongooseCreate = async (name, reps, weight, unit, date) => {
  const workout = new Workout({
    name, // from the parameters passed to the anonymous async func
    reps,
    weight,
    unit,
    date,
  });
  return await workout.save();
};

const mongooseRetrieveAll = async () => {
  const query = Workout.find();
  return query.exec();
};

const mongooseUpdate = async (id, name, reps, weight, unit, date) => {
  const result = await Workout.updateOne(
    { _id: id },
    { name: name, reps: reps, weight: weight, unit: unit, date: date }
  );
  console.log(result);
  if (result["matchedCount"] === 0) {
    throw "Not found";
  }
  if (result["modifiedCount"] >= 0) {
    return result["modifiedCount"];
  }
};

const mongooseDelete = async (id) => {
  const result = await Workout.deleteOne({ _id: id });
  console.log("CCC")
  console.log(result)
  return result.deletedCount;
};

export { mongooseCreate, mongooseRetrieveAll, mongooseUpdate, mongooseDelete };
