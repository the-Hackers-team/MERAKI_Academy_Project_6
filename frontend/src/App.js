import "./App.css";

import Login from "./componenet/login/login";
import Header from "./componenet/header/Header.js";
import Home from "./componenet/Home/Home.js";
import Sidebar from "./componenet/SideBar/Sidebar";
import PlayVideo from "./componenet/PlayVideo/PlayVideo.js";
import React, { useState } from "react";
import UpdateAnVideoById from "./componenet/updateVideo/updateVideo.js"
import { Routes, Route, Link } from "react-router-dom";
import Register from "./componenet/signup/signup";
import Profile from "./componenet/profile/profile.js"
import CreateNewVideo from "./componenet/createNewVideo/createNewVideos.js"
function App() {
  const [sideClick, setSideClick] = useState(true);
  const menu = document.querySelector("#menu");

  const sidebar = document.querySelector(".sidebar");

  const showSide = function () {
    sidebar.classList.toggle("show-sidebar");
  };
  return (
    <div className="App">
      <Header setSideClick={setSideClick} sideClick={sideClick} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainBody">
              <Sidebar sideClick={sideClick} />

              <Home />
            </div>
          }
        />
        <Route path="/video" element={<PlayVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update/:id" element={<UpdateAnVideoById />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/create" element={<CreateNewVideo/>} />
        
      </Routes>
    </div>
  );
}

export default App;
