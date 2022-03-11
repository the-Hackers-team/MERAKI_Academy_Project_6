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
const Subcriptions = ()=>{


    const [allSubscriptVideos,setallSubscriptVideos] = useState([])
    const getAllvideossubscripes = ()=>{
        axios.get("https://localhost:5000/subscription/allVideos", {
            headers: {
              Authorization: `Basic ${state.token}`,
            },
          }).then(response => {
            setallSubscriptVideos(response.data.results);

          }).catch(error => {
    
          })
    }



    return (

<></>

    )
}

export default Subcriptions;