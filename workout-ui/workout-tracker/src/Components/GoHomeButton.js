import React from "react";
import { Link } from "react-router-dom";

function GoHomeButton () {
    return(
    <>
    <nav>
        <button><Link to="/">Go Home</Link></button>
    </nav>
    </>)
}

export default GoHomeButton;

