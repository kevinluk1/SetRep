import React from "react";
import Exercise from "./Row";

function ExercisesTable({
  exercisesDbArrayOfObjects,
  removeExercises,
  onEdit,
}) {
  console.log(typeof exercisesDbArrayOfObjects);

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
        <tbody>
        {exercisesDbArrayOfObjects.map((exercise, i) => (
            <Exercise
              exerciseBeingEdited={exercise}
              key={i}
              removeExercises={removeExercises}
              onEdit={onEdit}
            />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExercisesTable;
