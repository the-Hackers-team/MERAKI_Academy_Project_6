import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducer/login/index";
import "./login.css";

toast.configure();


const Login = () => {
    //// redux logic
    const dispatch = useDispatch();
    const state = useSelector((state) => {
      return {
        token: state.loginReducer.token,
        isLoggedIn: state.loginReducer.isLoggedIn,
      };
    });

    const [email, setfirstName] = useState("");
    const [password, setlastName] = useState("");
    
    const loginFunction = () => {
        if (email && password) {
          const userLogin = { email, password };
    
          const myUser = axios
            .post(`http://localhost:5000/user/login`, userLogin)
            .then((response) => {
              if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                dispatch(login(response.data.token));
               
                navigate("/");
              }
            })
            .catch((err) => {
              console.log(err.meseage);
              toast.error(err.response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
              });
            });
        } else {
          notifyLoginError();
        }
      };



























}


export default Login