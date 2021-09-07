import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Editor from "./Editor";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <Header />
          <div
            style={{
              marginTop: "5rem",
              border: "1px solid blue",
              display: "flex",
            }}
          >
            <Editor />
            <Sidebar />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
