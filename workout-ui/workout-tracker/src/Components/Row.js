import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { RiDeleteBin5Line } from "react-icons/ri";

function Exercise({ exerciseName, removeExercises }) {
  return (
    <>
      <tr className="tableRows">
        <td>{exerciseName.name}</td>
        <td>{exerciseName.reps}</td>
        <td>{exerciseName.weight}</td>
        <td>{exerciseName.unit}</td>
        <td>{exerciseName.date}</td>
        <td>
          <RiDeleteBin5Line onClick={() => removeExercises(exerciseName._id)} />
          &nbsp;&nbsp;&nbsp;
          <EditButton />
        </td>
      </tr>
    </>
  );
}

export default Exercise;
