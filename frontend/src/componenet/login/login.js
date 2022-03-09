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






























}