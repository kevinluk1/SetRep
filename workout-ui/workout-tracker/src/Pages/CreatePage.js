import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateExercise() {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseReps, setExerciseReps] = useState("");
  const [exerciseWeight, setExerciseWeight] = useState("");
  const [exerciseUnit, setExerciseUnit] = useState("");
  const [exerciseDate, setExerciseDate] = useState("");

  const history = useHistory();
  const createExercise = async () => {
    const createdExercise = {
      name: exerciseName,
      reps: exerciseReps,
      weight: exerciseWeight,
      unit: exerciseUnit,
      date: exerciseDate,
    };

    const response = await fetch("/exercises", {
      method: "POST",
      body: JSON.stringify(createdExercise),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 201) {
      alert("yay");
    }
    history.push("/");
  };

  return (
    <>
      <div className={"backgroundBlock"}>
        <h2> New Exercise</h2>

        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Reps"
          value={exerciseReps}
          onChange={(e) => setExerciseReps(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Weight"
          value={exerciseWeight}
          onChange={(e) => setExerciseWeight(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Unit"
          value={exerciseUnit}
          onChange={(e) => setExerciseUnit(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Date"
          value={exerciseDate}
          onChange={(e) => setExerciseDate(e.target.value)}
        />
        <br />
        <button onClick={createExercise}> Submit </button>
      </div>
    </>
  );
}

export default CreateExercise;
