import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useEffect, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

const updateAnVideoById = () => {

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [image,setimage] = useState("")
    const [category,setcategory] = useState("")
    const [video_link,setvideo_link] = useState("")


  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  let { id } = useParams();

  const getVideoById = () => {
    axios
      .get(`http://localhost:5000/video/search_1?id=${id}`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setTitle(response.data.results[0].title)
        setDescription(response.data.results[0].description)
        setimage(response.data.results[0].image)
        setcategory(response.data.results[0].category)
        setvideo_link(response.data.results[0].video_link)
      })
      .catch((error) => {
          
      });
  };
};
