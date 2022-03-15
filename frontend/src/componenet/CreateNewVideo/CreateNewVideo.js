import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useEffect, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

toast.configure();

const CreateNewVideo = () => {
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");
    const [video_link, setvideo_link] = useState("");
    const state = useSelector((state) => {
      return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        token: state.loginReducer.token,
      };
    });

    const createNewVideo = () => {
        if (title && description && image && category && video_link) {
          axios
            .post(
              "http://localhost:5000/video",
              { title, description, image, category, video_link },
              {
                headers: {
                  Authorization: `Basic ${state.token}`,
                },
              }
            )
            .then((response) => {
                toast.success(response.data.message, {
                  position: toast.POSITION.TOP_RIGHT,
                });
              })
              .catch((err) => {
                toast.error(err.response.data.message, {
                  position: toast.POSITION.TOP_RIGHT,
                });
              });
            } else {
                if (!title || !description || !image || !category || !video_link) {
                  toast.warn("pleas Fill All The Field", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                });
            } else {
              if (!title || !description || !image || !category || !video_link) {
                toast.warn("pleas Fill All The Field", {
                  position: toast.POSITION.TOP_RIGHT,
                });
            }
        }
      };
      return (
        <>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                Video Title
              </span>
            </div>
            <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
              </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        />
            <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">
            Categories
          </span>
        </div>
      </div>
      <label for="basic-url">Video background image</label>
      <div class="input-group mb-3">
        <div class="input-group-prepend"></div>
        <span class="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          </div>
        <input
          type="file"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          onChange={(e) => {
            setimage(e.target.value);
          }}
        />
      </div>
           <label for="basic-url">Video Link</label>
           <div class="input-group mb-3">
                    <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3"></span>
          upload
          </span>
