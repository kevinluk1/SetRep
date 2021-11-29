import React from "react";
import Exercise from "./Row";

function ExercisesTable({ exercisesDbArrayOfObjects, removeExercises }) {
  return (
    <div className="exerciseTable">
      <table>
        <thead>
          <tr className="tableHeaders">
            <th>Exercise</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
            <th>Options</th>
          </tr>
        </thead>

        {exercisesDbArrayOfObjects.map((exercise, i) => (
          <tbody>
            <Exercise
              exerciseName={exercise}
              key={i}
              removeExercises={removeExercises}
            />
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default ExercisesTable;
