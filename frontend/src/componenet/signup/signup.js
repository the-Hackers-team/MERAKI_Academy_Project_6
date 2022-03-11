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
  const [istrue, setistrue] = useState(true);
  const [istrue1, setistrue1] = useState(false);
  const [istrue2, setistrue2] = useState(false);
  const [istrue3, setistrue3] = useState(false);
  const [istrue4, setistrue4] = useState(false);

  const [isRegister, setisRegister] = useState(true);
  const [count, setcount] = useState(0);
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

  const register = async () => {
    if (
      firstName &&
      lastName &&
      age &&
      country &&
      email &&
      password &&
      userImage
    ) {
      const newUser = {
        firstName,
        lastName,
        age,
        country,
        email,
        password,
        userImage,
      };
      await axios
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
    <>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter your first Name"
                    onChange={(e) => {

                        setfirstName(e.target.value);
                    }}
                  />
                  <label class="form-label" for="form3Example3">
                    firstName
                  </label>

                  <input
                    type="text"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter your last name"
                    onChange={(e) => {
                        setlastName(e.target.value)
                    }}
                  />
                  <label class="form-label" for="form3Example4">
                    lastName
                  </label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter your Age"
                    onChange={(e) => {setAge(e.target.value)}}
                  />
                  <label class="form-label" for="form3Example3">
                    age
                  </label>
                  <input
                    type="text"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter your country"
                    onChange={(e) => {
                        setcountry(e.target.value)
                    }}
                  />
                  <label class="form-label" for="form3Example4">
                    country
                  </label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter your /Email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                  />
                  <label class="form-label" for="form3Example3">
                    email
                  </label>
                  <input
                    type="text"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter your password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                  />
                  <label class="form-label" for="form3Example4">
                    password
                  </label>
                  <input
                    type="file"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter image"
                    onChange={(e) => {
                        setUserImage(e.target.value)
                    }}
                  />
                  <label class="form-label" for="form3Example4">
                    image
                  </label>
                </div>

                {/* <div class="text-center text-lg-start mt-4 pt-2">
                  {isRegister?<button
                    type="button"
                    class="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                       onClick={(e) => {
                          console.log(count);
                           if (count === 0) {
                             setistrue(false)
                             setistrue1(true)
                             setcount(count + 1)
                             setistrue4(true)
                           }else{

                            
                            setistrue1(false)
                               setistrue2(true)
                             
                              setisRegister(false) 
                               setcount(0)
                               setistrue3(true)
                               setistrue4(true)
                              
                           }
                        
                       
                       }}
                  >
                    Next
                  </button>:null}
                  
                </div> */}
                {istrue4 ? (
                  <div class="text-center text-lg-start mt-3 pt-2">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      onClick={() => {
                        if (istrue3) {
                          setisRegister(true);
                          setistrue3(false);
                          setistrue2(false);
                          setistrue1(true);
                        }
                        if (count === 1) {
                        }
                      }}
                    >
                      previous
                    </button>
                  </div>
                ) : null}
                <div class="text-center text-lg-start mt-3 pt-2">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={() => {
                      register();
                    }}
                  >
                    Rgister
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
