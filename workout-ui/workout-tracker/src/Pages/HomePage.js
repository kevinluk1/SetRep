import React, { useState, useEffect } from "react";
import ExercisesTable from "../Components/Table";
import { Link } from "react-router-dom";


function HomePage() {
  const [results, setResults] = useState([]);
  const loadExercises = async () => {
    const response = await fetch("/exercises");
    const exercises = await response.json();
    setResults(exercises);
  };

  useEffect(() => {
    loadExercises();
  }, []); // Run as soon as the page loads

  return (
    <>
      <h1>Home Page</h1>
      <Link to= "/create-exercise"> Create Exercise </Link>
      <Link to= "/edit-exercise"> Edit Exercise </Link>

      <ExercisesTable exercisesDbArrayOfObjects={results}> </ExercisesTable>
      {/*{JSON.stringify(results)}*/}
    </>
  );
}

export default HomePage;
