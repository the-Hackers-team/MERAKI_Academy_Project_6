import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "./PlayVideo.css";
import moment from "moment";
const PlayVideo = ({ chanelId }) => {
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
  //create state to set number of sbscribers
  const [numberOfScribers, setNumberOfScribers] = useState([]);

  //create state to render on comment
  const [iscomment, setIscomment] = useState(true);

  //create state to render on view

  const [isView, setIsView] = useState(false);

  //create state to update click
  const [updateId, setupdateId] = useState(0);

  const [isUpdating, setIsUpdating] = useState(false);

  //create state for update comment
  const [updatedComment, setUpdatedComment] = useState("");

  const decode = state.token && jwt_decode(state.token);
  let user_id = decode && decode.userId;
  let user_img = decode && decode.image;
  let userFirstName = decode && decode.firstName;
  let userLastName = decode && decode.lastName;
  // const chanelId = video.length && video[0].user_id;
  //create state for chanelId
  console.log(comments);
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

        numSubscribtions(response.data.results[0].user_id);
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
      .get(`http://localhost:5000/video/${chanelId}`)
      .then((response) => {
        setChanelVideos(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //create functions to get number of subscribtions

  const numSubscribtions = (chanelId) => {
    axios
      .get(`http://localhost:5000/subscription/subscribers/${chanelId}`)
      .then((response) => {
        setNumberOfScribers(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addView = () => {
    if (chanelId) {
      axios
        .put(`http://localhost:5000/video/addview/${chanelId}`, {}, {})
        .then((response) => {
          console.log(response);
          setIsView(!isView);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const editComment = (id) => {
    axios
      .put(
        `http://localhost:5000/comment/${id}`,
        { comment: updatedComment },
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

  const deleteComment = (id) => {
    axios
      .delete(
        `http://localhost:5000/comment/delete_1/${id}`,

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
  // console.log(comments);
  useEffect(() => {
    getVideoById();
    getChanelVideos();
  }, [iscomment, isView]);
  useEffect(() => {
    getAllComment();
  }, [iscomment]);
  useEffect(() => {
    addView();
  }, []);
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
                    {element.video_views} Views &bull;{" "}
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
                        navigate(`/channelDetails/${element.user_id}`);
                      }}
                    />
                    <div>
                      <p>
                        {element.firstName}{" "}
                        <span className="material-icons">check_circle</span>
                      </p>
                      <span>{numberOfScribers.length} Subscribers</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        subscribe();
                        setIscomment(!iscomment);
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

                              {comment.id == updateId ? (
                                <input
                                  defaultValue={comment.comment}
                                  onChange={(e) => {
                                    setUpdatedComment(e.target.value);
                                  }}
                                />
                              ) : (
                                <p>{comment.comment}</p>
                              )}
                            </div>
                            {user_id == comment.user_id ? (
                              <div class="section__controls">
                                <Link to="#">
                                  <i
                                    class="fas fa-edit"
                                    onClick={
                                      isUpdating
                                        ? () => {
                                            editComment(comment.id);
                                            setupdateId(0);
                                            setIsUpdating(!isUpdating);
                                            setIscomment(!iscomment);
                                          }
                                        : () => {
                                            setupdateId(comment.id);
                                            setIsUpdating(!isUpdating);
                                          }
                                    }
                                  ></i>
                                </Link>
                                <Link
                                  to="#"
                                  onClick={() => {
                                    deleteComment(comment.id);
                                  }}
                                >
                                  {isUpdating ? null : (
                                    <i class="fas fa-trash"></i>
                                  )}
                                </Link>
                                <Link
                                  to="#"
                                  onClick={() => {
                                    setupdateId(0);
                                    setIsUpdating(!isUpdating);
                                  }}
                                >
                                  {isUpdating ? (
                                    <i class="fa fa-times" />
                                  ) : null}
                                </Link>
                              </div>
                            ) : null}
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
            chanelVideos.length &&
            chanelVideos.map((element) => {
              return (
                <div className="side-video-list">
                  <Link to="" className="small-thumbnail">
                    <img src={element.image} alt="" />
                  </Link>
                  <div className="vid-info">
                    <Link to="">{element.title}</Link>
                    <p>{`${element.firstName} ${element.lastName}`}</p>
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
