import "./App.css";
import Login from "./componenet/login/login";
import Header from "./componenet/header/Header.js";
import Home from "./componenet/Home/Home.js";
import Sidebar from "./componenet/SideBar/Sidebar";
import React, { useState } from "react";

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
      <div className="mainBody">
        <Sidebar sideClick={sideClick} />

        <Home />
        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
