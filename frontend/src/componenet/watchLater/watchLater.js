import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useEffect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducer/login/index";

toast.configure();
const WatchLater = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });
  //////// this state is ti save the watchLater videos
  const [watchLaterVideos, setwatchLaterVideos] = useState([]);
  ///////// this state is to render the getWatchLaterVideosByUserId after each delete process
  const [iswatchLaterVideos, setiswatchLaterVideos] = useState(false);

  const getWatchLaterVideosByUserId = () => {
    axios
      .get("http://localhost:5000/watchLater", {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setwatchLaterVideos(response.data.results);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const deleteFromWatchLaterVideos = (id) => {
    axios
      .delete(`http://localhost:5000/watchLater/delete/${id}`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  useEffect(() => {
    getWatchLaterVideosByUserId();
  }, [iswatchLaterVideos]);

  return (
      <div className="videos">
        <div className="videos__container">
          {watchLaterVideos &&
            watchLaterVideos.map((video) => {
              return (
                <div className="video">
                  <div className="video__thumbnail">
                    <img src={video.image} alt="" />
                  </div>
                  <div className="video__details">
                    <div className="author">
                      <img src={video.user_image} alt="" />
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

export default WatchLater;
