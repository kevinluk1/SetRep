import React from "react";
import Exercise from "./Row";

function ExercisesTable({ exercisesDbArrayOfObjects }) {
  return (
    <>
      {exercisesDbArrayOfObjects.map((exercise, i) => (
        <Exercise exerciseName={exercise} key={i} />
      ))}
    </>
  );
}

export default ExercisesTable;
