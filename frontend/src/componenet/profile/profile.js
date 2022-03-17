import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import moment from "moment";
toast.configure();
const Profile = () => {
  const [userProfile, setuserProfile] = useState([]);

  const [profileVideos, setprofileVideos] = useState([]);
  const [isDeleted, setisDeleted] = useState(false);
  const [myVideos, setmyVideos] = useState(true);
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  let decode = state.token && jwt_decode(state.token);
  let user_id = decode && decode.userId;

  const getUserById = () => {
    axios
      .get(`http://localhost:5000/user/profile`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setuserProfile(response.data.results);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const getAllVideosByChannelId = () => {
    axios
      .get(`http://localhost:5000/video/${user_id}`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setprofileVideos(response.data.results);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const deleteAnVideoById = (id) => {
    axios
      .delete(`http://localhost:5000/video/delete_1/${id}`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setisDeleted(!isDeleted);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  useEffect(() => {
    getUserById();
  }, []);
  console.log(userProfile);
  useEffect(() => {
    getAllVideosByChannelId();
  }, [isDeleted]);

  const profileDetails =
    userProfile &&
    userProfile.map((profile) => {
      return (
        <div className="profile-main">
          <div className="profile-div-container">
            <div className="container-above-div">
              <div className="image-name">
                <img src={profile.user_image} />
                <span className="home-videos-playList3">
                  {profile.firstName}
                </span>
                <span className="home-videos-playList2">
                  {profile.lastName}
                </span>
              </div>
              <div className="videos-profile">
                <button
                  className="all-videos"
                  onClick={() => {
                    setmyVideos(false);
                  }}
                >
                  {" "}
                  My Videos
                </button>
                <button
                  className="all-videos"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back To Home
                </button>
              </div>
            </div>
            <div className="home-videos-playList">
              <div
                className="home-videos-playList2"
                onClick={() => {
                  setmyVideos(true);
                }}
              >
                Home
              </div>
              <div
                className="home-videos-playList2"
                onClick={() => {
                  setmyVideos(false);
                }}
              >
                Videos
              </div>
              <div className="home-videos-playList2">Channels</div>
              <div className="home-videos-playList2">About</div>
            </div>
          </div>

          {myVideos ? (
            <div className="profile-upload-videos">
              <div className="profile-upload-image">
                <img
                  src="https://www.gstatic.com/youtube/img/channels/empty_channel_illustration.svg"
                  className="image-upload-video"
                />
              </div>
              <div className="uplaod-video-paragraph">
                <p className="upload-pargraph">Upload a video to get started</p>
                <p className="upload-pargraph-2">
                  Start sharing your story and connecting with viewers. Videos
                  you upload will show up here.
                </p>
                <button
                  className="uplaod-button"
                  onClick={() => {
                    navigate("/create");
                  }}
                >
                  Create New Video
                </button>
              </div>
            </div>
          ) : (
            <div className="videos">
              <div className="videos__container">
                {profileVideos &&
                  profileVideos.map((video) => {
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
                        <div>
                          <button
                            className="all-videos-video"
                            onClick={() => {}}
                          >
                            Update
                          </button>
                          <button
                            className="all-videos-video"
                            onClick={() => {
                              deleteAnVideoById(video.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      );
    });

  return <>{profileDetails ? profileDetails : null}</>;
};

export default Profile;
