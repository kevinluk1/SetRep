import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EditPage from "./Pages/EditPage";
import CreatePage from "./Pages/CreatePage";
import React, { useState } from "react";

function App() {
  const [workoutToEdit, setWorkoutToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setWorkoutToEdit={setWorkoutToEdit} />
          </Route>
          <Route path="/create-exercise">
            <CreatePage />
          </Route>
          <Route path="/edit-exercise">
            <EditPage workoutToEdit={workoutToEdit} />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
