import React, { useState, useEffect } from "react";
import ExercisesTable from "../Components/Table";
import NewExerciseButton from "../Components/NewExerciseButton";

function HomePage() {
  const [results, setResults] = useState([]);

  const loadExercises = async () => {
    const response = await fetch("/exercises");
    const exercises = await response.json();
    setResults(exercises);
  };

  // const removeExercises = async (_id) => {
  //   console.log("aaaa")
  //   let response = await fetch(`/exercises/${_id}`, { method: "DELETE" });
  //   if (response.status === 204){
  //   const exercises = await response.json(); <---- THIS MAKES NO SENSE
  //   BECAUSE THE DELETE METHOD DOES NOT RETURN ANYTHING IN THE BODY!
  //   let newExercise = await exercises.filter(exercise  => exercise._id !== _id);
  //   setResults(newExercise);}
  // };

  const removeExercises = async (_id) => {
    let response = await fetch(`/exercises/${_id}`, { method: "DELETE" });
    if (response.status === 204) {
      const newExercise = results.filter((exercise) => exercise._id !== _id);
      setResults(newExercise);
    }
  };

  useEffect(() => {
    loadExercises();
  }, []); // Run as soon as the page loads

  return (
    <div>
      <div>
        <h1>Kevin's Workout Tracker</h1>
      </div>
      <ExercisesTable
        exercisesDbArrayOfObjects={results}
        removeExercises={removeExercises}
      />
      <NewExerciseButton />
    </div>
  );
}

export default HomePage;
