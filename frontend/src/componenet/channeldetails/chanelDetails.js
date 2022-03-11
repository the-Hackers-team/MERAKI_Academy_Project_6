import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useEffect,useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducer/login/index";
toast.configure();
const ChannelDetails = () => {

    let {id} = useParams()
    const navigate = useNavigate();

    const state = useSelector((state) => {
      return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        token: state.loginReducer.token,
      };
    });

 const [channelDetails,setchannelDetails]   = useState([])
 
const getChannelById = ()=>{
    axios.get(`http://localhost:5000/channelDetails/${id}`,{
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      }).then(response=>{
        setchannelDetails(response.data.results)
    }).catch(err=>{
        toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
    })
}




useEffect(() => {
    getChannelById()
},[])

  return <></>;
};

export default ChannelDetails;
