import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EditPage from "./Pages/EditPage";
import CreatePage from "./Pages/CreatePage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create-exercise">
            <CreatePage />
          </Route>
          <Route path="/edit-exercise">
            <EditPage />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
