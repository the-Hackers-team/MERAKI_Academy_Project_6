import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useEffect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";


const Profile = ()=>{

    const navigate = useNavigate();

    const state = useSelector((state) => {
      return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        token: state.loginReducer.token,
      };
    });

    const getUserById = ()=>{
    axios.get(`http://localhost:5000/user/profile`,{
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      }).then((response)=>{

      })
      .catch((err)=>{
          
      })
    }
    
}