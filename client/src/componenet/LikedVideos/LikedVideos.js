import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducer/login/index";
import moment from "moment";
toast.configure();
const LikedVideos = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });
  //////////// this state is to save the liked videos from the function getVideosByLiks.
  const [LikedVideos, setLikedVideos] = useState([]);

  ///// this state is render the function after deleted the video from the liked videos
  const [is_deletedVideos, set_deletedVideos] = useState(false);

  const getVideosByLiks = () => {
    axios
      .get("http://localhost:5000/like", {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setLikedVideos(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteLikedVideos = (id) => {
    axios
      .delete(`http://localhost:5000/like/delete/${id}`, {
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
    getVideosByLiks();
  }, [is_deletedVideos]);

  return (
    <>
      <div className="videos">
        <div className="videos__container">
          {LikedVideos &&
            LikedVideos.map((video) => {
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
                      <span>
                        {video.video_views} •{" "}
                        {moment(video.publish_date).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default LikedVideos;
