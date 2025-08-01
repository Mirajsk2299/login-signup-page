import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomeComp/Home";
import Loggedin from "./LoggedinComp/Loggedin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loggedin" element={<Loggedin />} />
      </Routes>
    </Router>
  );
}

export default App;
