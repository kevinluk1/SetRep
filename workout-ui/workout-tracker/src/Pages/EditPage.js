import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GoHomeButton from "../Components/GoHomeButton";
function EditPage({ workoutToEdit }) {
  const history = useHistory();
  const [exerciseName, setExerciseName] = useState(workoutToEdit.name);
  const [exerciseReps, setExerciseReps] = useState(workoutToEdit.reps);
  const [exerciseWeight, setExerciseWeight] = useState(workoutToEdit.weight);
  const [exerciseUnit, setExerciseUnit] = useState(workoutToEdit.unit);
  const [exerciseDate, setExerciseDate] = useState(workoutToEdit.date);

  const editExercise = async () => {

    const editedExercise = {
      name: exerciseName,
      reps: exerciseReps,
      weight: exerciseWeight,
      unit: exerciseUnit,
      date: exerciseDate,
    };

    const response = await fetch(`/exercises/${workoutToEdit._id}`, {
      method: "PUT",
      body: JSON.stringify(editedExercise),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Edited exercise");
    } else {
      alert("Invalid entry");
    }

    history.push("/");
  };

  return (
    <>
      <div className={"backgroundBlock"}>
        <h2>Edit</h2>
        <div>
          <p>Edit your selected exercise</p>
        </div>
        <form className="EditForm">
          <label> Name: </label>
          <input
            type="text"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
          <br />
          <label> Reps: </label>{" "}
          <input
            type="text"
            value={exerciseReps}
            onChange={(e) => setExerciseReps(e.target.value)}
          />
          <br />
          <label> Weight: </label>
          <input
            type="text"
            value={exerciseWeight}
            onChange={(e) => setExerciseWeight(e.target.value)}
          />
          <br />
          <label> Unit: </label>
          <input
            type="text"
            value={exerciseUnit}
            onChange={(e) => setExerciseUnit(e.target.value)}
          />
          <br />
          <label> Date: </label>{" "}
          <input
            type="text"
            value={exerciseDate}
            onChange={(e) => setExerciseDate(e.target.value)}
          />
        </form>

        <button id={"editSubmitButton"} onClick={editExercise}>
          Submit
        </button>
      </div>
      <div>
        {" "}
        <GoHomeButton />
      </div>
    </>
  );
}
export default EditPage;
