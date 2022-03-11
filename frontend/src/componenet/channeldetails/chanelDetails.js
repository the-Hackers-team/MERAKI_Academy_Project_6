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
const ChannelDetails = () => {

    const navigate = useNavigate();

    const state = useSelector((state) => {
      return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        token: state.loginReducer.token,
      };
    });
    
 const [channelDetails,setchannelDetails]   = useState([])
 
const getChannelById = (id)=>{
    axios.get(`http://localhost:5000/channelDetails/${id}`).then(response=>{
        setchannelDetails(response.data.results)
    }).catch(error=>{
 
    })
}


  return <></>;
};

export default ChannelDetails;
