import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes ,Switch } from "react-router-dom";
const App=()=>{
  return<>
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes> */}
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/project" component={Project} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
  </>
}
export default App;