import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducer/login/index";

toast.configure();

const Subcriptions = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  const [isallSubscriptVideos, setisallSubscriptVideos] = useState(false);
  const [allSubscriptVideos, setallSubscriptVideos] = useState([]);

  const getAllvideossubscripes = () => {
    axios
      .get("https://localhost:5000/subscription/mySubsciption", {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setallSubscriptVideos(response.data.results);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const removeFromMySubscription = (id) => {
    axios
      .delete(`http://localhost:5000/subscription/delete/${id}`, {
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
    getAllvideossubscripes();
  }, [isallSubscriptVideos]);

  return (
    <div className="videos">
      <div className="videos__container">
        {allSubscriptVideos &&
          allSubscriptVideos.map((video) => {
            return (
              <div
                className="video"
                onClick={() => {
                  navigate(`/video/${video.id}`);
                }}
              >
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

export default Subcriptions;
