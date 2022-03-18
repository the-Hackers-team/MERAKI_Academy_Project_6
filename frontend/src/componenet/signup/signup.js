import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducer/login/index";
import "./signup.css";
import Cloudinary from "../Cloudinary/Cloudinary";
toast.configure();
const Register = () => {
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setcountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState("");
  //////////////////// for the hide and show

  /////////////////////////////////////
  const notifyRegisterSuccess = () => {
    toast.success("Register Done", { position: toast.POSITION.TOP_RIGHT });
    navigate("/login");
  };
  const notifyRegisterError = () => {
    toast.warn("Please fill All The Fields", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const register = () => {
    if (firstName && lastName && age && country && email && password) {
      const newUser = {
        firstName,
        lastName,
        age,
        country,
        email,
        password,
        userImage,
      };
      axios
        .post(`http://localhost:5000/user/register`, newUser)
        .then((response) => {
          if (response.data.success) {
            notifyRegisterSuccess();
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err.response.data.message);
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    } else {
      if (
        !firstName ||
        !lastName ||
        !age ||
        !country ||
        !email ||
        !password ||
        !userImage
      ) {
        notifyRegisterError();
      }
    }
  };

  return (
    // <>
    //   <section class="vh-100">
    //     <div class="container-fluid h-custom">
    //       <div class="row d-flex justify-content-center align-items-center h-100">
    //         <div class="col-md-9 col-lg-6 col-xl-5">
    //           <img
    //             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
    //             class="img-fluid"
    //             alt="Sample image"
    //           />
    //         </div>
    //         <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
    //           <form
    //             onSubmit={(e) => {
    //               e.preventDefault();
    //             }}
    //           >
    //             <div class="form-outline mb-4">
    //               <input
    //                 type="text"
    //                 id="form3Example3"
    //                 class="form-control form-control-lg"
    //                 placeholder="Enter your first Name"
    //                 onChange={(e) => {

    //                     setfirstName(e.target.value);
    //                 }}
    //               />
    //               <label class="form-label" for="form3Example3">
    //                 firstName
    //               </label>

    //               <input
    //                 type="text"
    //                 id="form3Example4"
    //                 class="form-control form-control-lg"
    //                 placeholder="Enter your last name"
    //                 onChange={(e) => {
    //                     setlastName(e.target.value)
    //                 }}
    //               />
    //               <label class="form-label" for="form3Example4">
    //                 lastName
    //               </label>
    //             </div>
    //             <div class="form-outline mb-4">
    //               <input
    //                 type="text"
    //                 id="form3Example3"
    //                 class="form-control form-control-lg"
    //                 placeholder="Enter your Age"
    //                 onChange={(e) => {setAge(e.target.value)}}
    //               />
    //               <label class="form-label" for="form3Example3">
    //                 age
    //               </label>
    //               <input
    //                 type="text"
    //                 id="form3Example4"
    //                 class="form-control form-control-lg"
    //                 placeholder="Enter your country"
    //                 onChange={(e) => {
    //                     setcountry(e.target.value)
    //                 }}
    //               />
    //               <label class="form-label" for="form3Example4">
    //                 country
    //               </label>
    //             </div>
    //             <div class="form-outline mb-4">
    //               <input
    //                 type="text"
    //                 id="form3Example3"
    //                 class="form-control form-control-lg"
    //                 placeholder="Enter your /Email"
    //                 onChange={(e) => {
    //                     setEmail(e.target.value)
    //                 }}
    //               />
    //               <label class="form-label" for="form3Example3">
    //                 email
    //               </label>
    //               <input
    //                 type="text"
    //                 id="form3Example4"
    //                 class="form-control form-control-lg"
    //                 placeholder="Enter your password"
    //                 onChange={(e) => {
    //                     setPassword(e.target.value)
    //                 }}
    //               />
    //               <label class="form-label" for="form3Example4">
    //                 password
    //               </label>
    //               <input
    //                 type="file"
    //                 id="form3Example4"
    //                 class="form-control form-control-lg"
    //                 placeholder="Enter image"
    //                 onChange={(e) => {
    //                     setUserImage(e.target.value)
    //                 }}
    //               />
    //               <label class="form-label" for="form3Example4">
    //                 image
    //               </label>
    //             </div>

    //             <div class="text-center text-lg-start mt-3 pt-2">
    //               <button
    //                 type="button"
    //                 class="btn btn-primary btn-lg"
    //                 style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
    //                 onClick={() => {
    //                   register();
    //                 }}
    //               >
    //                 Rgister
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>

    <div class="card1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
        <h2 class="title-sign"> Sign Up</h2>

        <div class="email-login">
          <label for="First Name">
            {" "}
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="First Name"
            className="log-reg"
            required
            value={firstName}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
          />
          <label for="Last Name">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="Last Name"
            className="log-reg"
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            required
          />
          <label for="email">
            {" "}
            <b>Email</b>
          </label>

          <input
            className="log-reg"
            type="text"
            placeholder="Enter Email"
            name="uname"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label for="Age">
            {" "}
            <b>Age</b>
          </label>
          <input
            type="number"
            placeholder="Enter Age"
            name="Age"
            className="log-reg"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            required
          />
          <label for="Country">
            {" "}
            <b>Country</b>
          </label>
          <input
            type="text"
            placeholder="Enter Country"
            name="Country"
            className="log-reg"
            value={country}
            onChange={(e) => {
              setcountry(e.target.value);
            }}
            required
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            className="log-reg"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <label className="image-label">
            <b>Choose Profile Image</b>
          </label>

          <Cloudinary setImage={setUserImage} />
        </div>

        <button class="cta-btn">Sign Up</button>
        <p className="subtitle">
          Already have an account?{" "}
          <Link className="forget-pass" to="/login">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
