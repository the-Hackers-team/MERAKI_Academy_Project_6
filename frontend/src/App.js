import "./App.css";
import Login from "./componenet/login/login"
import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./componenet/signup/signup"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
