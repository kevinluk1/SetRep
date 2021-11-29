import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function DeleteButton(removeExercises, exerciseName) {
  return <RiDeleteBin5Line onClick={() => removeExercises(exerciseName._id)} />;
}

export default DeleteButton;
