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
  const [watchLaterVideos, setwatchLaterVideos] = useState([]);

  const getWatchLaterVideosByUserId = () => {
    axios
      .get("http://localhost:5000/watchLater")
      .then((response) => {
        setwatchLaterVideos(response.data.results);
      })
      .catch((error) => {});
  };

  return <></>;
};
