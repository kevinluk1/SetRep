import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

function Exercise({ exerciseBeingEdited, removeExercises, onEdit }) {
  //individual objects of an array passed in
  return (
    <>
      <tr className="tableRows">

        <td>{exerciseBeingEdited.name}</td>
        <td>{exerciseBeingEdited.reps}</td>
        <td>{exerciseBeingEdited.weight}</td>
        <td>{exerciseBeingEdited.unit}</td>
        <td>{exerciseBeingEdited.date}</td>
        <td>
          <RiDeleteBin5Line onClick={() => removeExercises(exerciseBeingEdited._id)} />
          &nbsp;&nbsp;&nbsp;
          <FiEdit2 onClick={() => onEdit(exerciseBeingEdited)} />{/*Passing an
           entire Javascript object to onEdit, complete with properties*/}
        </td>
      </tr>
    </>
  );
}

export default Exercise;
