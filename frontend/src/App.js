import "./App.css";
import Login from "./componenet/login/login";
import Header from "./componenet/header/Header.js";
import Home from "./componenet/Home/Home.js";
import Sidebar from "./componenet/SideBar/Sidebar";
import PlayVideo from "./componenet/PlayVideo/PlayVideo.js";
import React, { useState } from "react";
import UpdateAnVideoById from "./componenet/updateVideo/updateVideo.js";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./componenet/signup/signup";
import Profile from "./componenet/profile/profile.js";
import CreateVideo from "./componenet/CreateVideo/CreateVideo.js";
import LikedVideos from "./componenet/LikedVideos/LikedVideos";
import Subcriptions from "./componenet/subscriptions/subscriptions";
import WatchLater from "./componenet/watchLater/watchLater";
import ChannelDetails from "./componenet/channeldetails/chanelDetails";
import AllCategories from "./componenet/allCategories/AllCategories.js"
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
        <Route path="/video/:id" element={<PlayVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update/:id" element={<UpdateAnVideoById />} />


        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateVideo />} />

        <Route path="/likedVideos" element={<LikedVideos />} />

        <Route path="/likedVideos" element={<LikedVideos />} />

        <Route path="/mySubscription" element={<Subcriptions />} />

        <Route
          path="/watchLater"
          element={
            <div className="mainBody">
              <Sidebar sideClick={sideClick} />

              <WatchLater />
            </div>
          }
        />

        <Route path="/channelDetails/:id" element={<ChannelDetails />} />

        <Route path="/mySubscription" element={<Subcriptions />} />

       

        <Route path="/channelDetails/:id" element={<ChannelDetails />} />

        <Route path="/categories/:category" element={<AllCategories />} />

       
      </Routes>
    </div>
  );
}

export default App;
