import React from "react";
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Events from "./components/events";
import AnnualReport from "./components/annual";
import Teams from "./components/team";
import Blogs from "./components/blogs";
import SignUp from "./components/signup";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/events" exact component={Events} />
        <Route path="/annual" exact component={AnnualReport} />
        <Route path="/team" exact component={Teams} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/sign-up" exact component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
