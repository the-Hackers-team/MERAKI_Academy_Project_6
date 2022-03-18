import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useEffect, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import Swal from "sweetalert2";
import Cloudinary from "../Cloudinary/Cloudinary";
import CloudinaryVideo from "../cloudinaryVideo/CloudinaryVideo";
import "./CreateVideo.css"
toast.configure();
const CreateVideo = () => {
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
      }
    }
  };

  return (
    <div className="create-new-video-main">
      <span className="create">Create Video</span>

      <div className="form">
        <input
          type="text"
          id="product-name"
          placeholder="video title"
          className="inputprod"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <br />
        <textarea
          className="text-area"
          id="des"
          placeholder="Video description"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        ></textarea>

        <br />
        <br />
        <textarea
          className="text-area"
          id="tags"
          placeholder="Enter categories here, for example - cars, Electonics, Clothes, "
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        ></textarea>
        <div className="product-info">
          <p className="text">Video image</p>

          <Cloudinary setImage={setimage} />
        </div>

        <div className="product-info">
          <p className="text">Video Link</p>

          <CloudinaryVideo setVideo={setvideo_link} />
        </div>

        <div className="buttons">
          <button
            className="btn"
            id="add-btn"
            onClick={() => {
              Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                confirmButtonColor: "#4267b3",
                denyButtonText: `Don't save`,
              }).then((result) => {
                if (result.isConfirmed) {
                  createNewVideo();
                  Swal.fire("Saved!", "", "success");
                } else if (result.isDenied) {
                  Swal.fire("Changes are not saved", "", "info");
                }
              });
            }}
          >
            upload Video
          </button>
         
        </div>
      </div>
    </div>
    
  );
};

export default CreateVideo;
