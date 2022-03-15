import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import { Link } from "react-router-dom";
import "./Home.css";
import Categories from "../Categories/Categories";
import axios from "axios";
import { useSelector } from "react-redux";
const menuIcon = document.querySelector(".logo");
const Home = () => {
  const [videos, setVideos] = useState([]);
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  const getVideoBySubscriptios = () => {
    axios
      .get(`http://localhost:5000/subscription/videos`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setVideos(response.data.results);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    getVideoBySubscriptios();
  }, []);

  return (
    <div className="videos">
      <Categories />
      <h1>Recommended</h1>

      <div className="videos__container">
        {videos &&
          videos.map((video) => {
            return (
              <div className="video">
                <div className="video__thumbnail">
                  <img src={video.image} alt="" />
                </div>
                <div className="video__details">
                  <div className="author">
                    <img src={videos.user_image} alt="" />
                  </div>
                  <div className="title">
                    <h3>{video.title}</h3>
                    <Link to="">{`${video.firstName}  ${video.lastName}`}</Link>
                    <span>{video.video_views} • 3 Months Ago</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
