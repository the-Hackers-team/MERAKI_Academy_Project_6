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
        <button className="category">Category 1</button>
        <button className="category">Category 2</button>
        <button className="category">Category 3</button>
        <button className="category">Category 4</button>
        <button className="category">Category 5</button>
        <button className="category">Category 6</button>
        <button className="category">Category 7</button>
        <button className="category">Category 8</button>
        <button className="category">Category 9</button>
      </section>
    </div>
  );
};

export default Categories;
