import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducer/login/index";



const Register = ()=>{
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("")
  const [age, setAge] = useState(0);
  const [country, setfirstName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userImage, setUserImage] = useState("")

   

return (
<>
  











</>













)


}