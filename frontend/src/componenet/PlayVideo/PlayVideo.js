import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./PlayVideo.css";
import moment from "moment";
const PlayVideo = () => {
  //params initialization
  const params = useParams();
  //get id from params
  const { id } = params;

  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  //create state for video

  const [video, setVideo] = useState([]);

  //create state for chanelVideos

  const [chanelVideos, setChanelVideos] = useState([]);

  //create state for comment
  const [comment, setComment] = useState("");
  //create state for comments
  const [comments, setComments] = useState([]);
  //find user_id from token

  //create state to render on comment
  const [iscomment, setIscomment] = useState(true);

  const decode = state.token && jwt_decode(state.token);
  let user_id = decode && decode.userId;
  let user_img = decode && decode.image;
  let userFirstName = decode && decode.firstName;
  let userLastName = decode && decode.lastName;
  const chanelId = video.length && video[0].user_id;
  const getVideoById = () => {
    axios
      .get(`http://localhost:5000/video/search_1?id=${id}`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setVideo(response.data.results);
        getAllVideosByChannelId(response.data.results[0].user_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllVideosByChannelId = (chanelId) => {
    axios
      .get(`http://localhost:5000/video/${chanelId}`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setChanelVideos(response.data.results);
        // console.log(response.data.results);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  const createComment = () => {
    axios
      .post(
        `http://localhost:5000/comment/${id}`,
        { comment },
        {
          headers: {
            Authorization: `Basic ${state.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllComment = () => {
    axios
      .get(`http://localhost:5000/comment/${id}`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setComments(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // create function to add like
  const addVideotosave = () => {
    axios
      .post(
        `http://localhost:5000/watchlater/add/${id}`,
        {},
        {
          headers: {
            Authorization: `Basic ${state.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addLikeOnVideo = () => {
    axios
      .post(
        `http://localhost:5000/video/addLikeOnVideo/${id}`,
        {},
        {
          headers: {
            Authorization: `Basic ${state.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const disLikeOnVideo = () => {
    axios
      .post(
        `http://localhost:5000/video/addDisLikeOnVideo/${id}`,
        {},
        {
          headers: {
            Authorization: `Basic ${state.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const subscribe = () => {
    axios
      .post(
        `http://localhost:5000/subscription/add/${chanelId}`,
        {},
        {
          headers: {
            Authorization: `Basic ${state.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getChanelVideos = () => {
    axios
      .get(`http://localhost:5000/videos/${chanelId}`)
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVideoById();
    getChanelVideos();
  }, [iscomment]);
  useEffect(() => {
    getAllComment();
  }, [iscomment]);
  // console.log(video[0].user_id);
  return (
    <div className="container-Play-video play-container">
      <div className="row-video">
        {video &&
          video.map((element) => {
            return (
              <div className="play-video">
                <video controls autoplay>
                  <source src={element.video_link} />
                </video>
                <div className="tags">
                  <Link to="">#Çukur</Link>
                  <Link to="">#turkish</Link>
                  <Link to="">#YamaÇ</Link>
                  <Link to="">#final</Link>
                </div>

                <h3>{element.title}</h3>
                <div className="play-video-info">
                  <p>
                    {element.video_views} &bull;{" "}
                    {moment(element.publish_date).fromNow()}
                  </p>
                  <div>
                    <Link
                      to="#"
                      onClick={() => {
                        addLikeOnVideo();
                        setIscomment(!iscomment);
                      }}
                    >
                      <span className="material-icons-outlined">thumb_up</span>
                      {element.Likes}
                    </Link>
                    <Link
                      to="#"
                      onClick={() => {
                        disLikeOnVideo();
                        setIscomment(!iscomment);
                      }}
                    >
                      <span className="material-icons-outlined">
                        thumb_down
                      </span>
                      {element.Dislikes}
                    </Link>
                    <Link to="">
                      <span className="material-icons-outlined">reply</span>
                      Share
                    </Link>
                    <Link
                      to="#"
                      onClick={() => {
                        addVideotosave();
                      }}
                    >
                      <span className="material-icons-outlined">
                        playlist_add
                      </span>
                      Save
                    </Link>
                  </div>

                  <hr />
                  <div className="plublisher">
                    <img
                      src={element.user_image}
                      alt=""
                      onClick={() => {
                        navigate(`/channelDetails/${element.id}`);
                      }}
                    />
                    <div>
                      <p>
                        {element.firstName}{" "}
                        <span className="material-icons">check_circle</span>
                      </p>
                      <span>500k Subscribers</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        subscribe();
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="vid-description">
                    <p>{element.title}</p>
                    <p>{element.description}</p>
                    <hr />
                    <h4>{comments.length} Comments</h4>

                    <div className="add-comment">
                      <img src={user_img} alt="" />
                      <input
                        type="text"
                        placeholder="Write comments..."
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                      />
                      <button
                        className="comment"
                        onClick={() => {
                          createComment();
                          setIscomment(!iscomment);
                        }}
                      >
                        comment
                      </button>
                    </div>
                    {comments &&
                      comments.map((comment) => {
                        return (
                          <div className="old-comment">
                            <img src={comment.user_image} alt="" />
                            <div>
                              <h3>
                                {`${comment.firstName} ${comment.lastName}`}{" "}
                                <span>
                                  {moment(comment.publish_date).fromNow()}
                                </span>
                              </h3>
                              <p>
                                <p>{comment.comment}</p>
                              </p>
                            </div>
                            <div class="section__controls">
                              <Link to="#">
                                <i class="fas fa-edit"></i>
                              </Link>
                              <Link to="#">
                                <i class="fas fa-trash"></i>
                              </Link>
                             
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        <div className="right-sidebar-video">
          {chanelVideos &&
            chanelVideos.map((element) => {
              return (
                <div className="side-video-list">
                  <Link to="" className="small-thumbnail">
                    <img src={element.image} alt="" />
                  </Link>
                  <div className="vid-info">
                    <Link to="">{element.title}</Link>
                    <p>{`${video.length && video[0].firstName} ${
                      video.length && video[0].lastName
                    }`}</p>
                    <p>
                      {element.video_views} Views •{" "}
                      {moment(element.publish_date).fromNow()}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
