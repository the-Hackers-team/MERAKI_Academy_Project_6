import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useEffect, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

toast.configure();

const CreateNewVideo = () => {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [video_link, setvideo_link] = useState("");
    const state = useSelector((state) => {
      return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        token: state.loginReducer.token,
      };
    });

