import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducer/login/index";
import moment from "moment";
import "./Categories.css";
const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="categories">
      <section className="category-section">
        <button className="category active">All</button>
        <button className="category" onClick={() =>{
          navigate(`/categories/Educational Videos`)
        }}>Educational Videos</button>
        <button className="category" onClick={() =>{
          navigate(`/categories/Unboxing Videos`)
        }}>Unboxing Videos</button>
        <button className="category" onClick={() =>{
          navigate(`/categories/Learning Videos`)
        }}>Learning Videos</button>
        <button className="category" onClick={() =>{
          navigate(`/categories/Actions Films`)
        }}>Actions Films</button>
        <button className="category" onClick={() =>{
          navigate(`/categories/Trailers`)
        }}>Trailers</button>
        <button className="category" onClick={() =>{
          navigate(`/categories/Challenge Video`)
        }}>Challenge Video</button>
        <button className="category" onClick={() =>{
          navigate(`/categories/Product Demo`)
        }}>Product Demo</button>
        <button className="category" onClick={() =>{
          navigate(`/categories/Reaction Videos`)
        }}>Reaction Videos</button>
        <button className="category" onClick={() =>{
          navigate(`/categories/Video Blogs`)
        }}>Video Blogs</button>
      </section>
    </div>
  );
};

export default Categories;
