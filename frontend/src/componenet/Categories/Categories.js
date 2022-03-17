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
  return (
    <div className="categories">
      <section className="category-section">
        <button className="category active">All</button>
        <button className="category">Educational Videos</button>
        <button className="category">Unboxing Videos</button>
        <button className="category">Learning Videos</button>
        <button className="category">Actions Films</button>
        <button className="category">Trailers</button>
        <button className="category">Challenge Video</button>
        <button className="category">Product Demo</button>
        <button className="category">Reaction Videos</button>
        <button className="category">Video Blogs</button>
      </section>
    </div>
  );
};

export default Categories;
