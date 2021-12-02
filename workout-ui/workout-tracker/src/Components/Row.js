import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

function Exercise({ exerciseName, removeExercises, onEdit }) {
  //individual
  // objects of an array passed in
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
          <FiEdit2 onClick={() => onEdit(exerciseName)} />
        </td>
      </tr>
    </>
  );
}

export default Exercise;
