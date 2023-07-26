import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route,Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const App=()=>{
  return<>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/contact" component={Contact} />
    <Redirect to="/" />
  </Switch>
  </>
}
export default App;