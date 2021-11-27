import React from "react";

function Exercise({exerciseName}) {
    return(
        <>


        <ul>
            <li>{exerciseName.name}</li>
            <li>{exerciseName.reps}</li>
            <li>{exerciseName.date}</li>
            <br/>
        </ul>
            </>
    )
}

export default Exercise;
