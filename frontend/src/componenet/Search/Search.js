import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import { Link, useNavigate,useParams } from "react-router-dom";

import Categories from "../Categories/Categories";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
const menuIcon = document.querySelector(".logo");
const Search = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {search} = params;
  const [allVideos, setAllVideos] = useState([]);
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });
  const getAllVideos = () => {
    axios
      .get(`http://localhost:5000/video/all`)
      .then((response) => {
        setAllVideos(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllVideos();
  });
  return (
    <div className="videos">
      <Categories />
    

      <div className="videos__container">
        {allVideos &&
          allVideos
            .filter((element) => {
               if (
                element.title.toLowerCase().includes(search.toLowerCase()) ||
                (element.category &&
                  element.category.toLowerCase().includes(search.toLowerCase()))
              ) {
                return element;
              }
            }).map((video) => {
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
  );
};

export default Search;
