import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ExercisesTable from "../Components/Table";

function HomePage({ setWorkoutToEdit }) {
  const [results, setResults] = useState([]);
  const history = useHistory();

  const loadExercises = async () => {
    const response = await fetch("/exercises");
    const exercises = await response.json(); // not express res.json!! e.g
    // not stringify. (this .json() method  converts a string to a JAVASCRIPT
    // OBJECT -- response is simply the name
    // of the variable you chose to declare. It is NOT an EXPRESS response
    // object.)
    setResults(exercises);
    // exercises state variable  is an array object
  };

  const onEdit = (exerciseBeingEdited) => {
    setWorkoutToEdit(exerciseBeingEdited); // setWorkoutToEdit updates the state variable
    // workoutToEdit in App.js --> this state variable is passed from
    // App.js down to EditPage.js
    history.push("/edit-exercise");
  };


  const removeExercises = async (_id) => {
    let response = await fetch(`/exercises/${_id}`, { method: "DELETE" });
    if (response.status === 204) {
      const newExercise = results.filter((exercise) => exercise._id !== _id);
      setResults(newExercise);
    }
  };

  const onNewExercise = () => {
    history.push("/create-exercise");
  };

  useEffect(() => {
    loadExercises();
  }, []); // Run as soon as the page loads

  return (
    <div className={"backgroundBlock_2"}>
      <div>
        <h2>SetRep, the Online Workout Tracker!</h2>
      </div>
      <ExercisesTable
        exercisesDbArrayOfObjects={results}
        removeExercises={removeExercises}
        onEdit={onEdit}
      />
      <button onClick={onNewExercise}> New Exercise </button>
    </div>
  );
}

export default HomePage;
