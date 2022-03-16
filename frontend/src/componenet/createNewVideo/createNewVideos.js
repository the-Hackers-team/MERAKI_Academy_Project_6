import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useEffect, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import "./createNewVideo.css";
import Swal from "sweetalert2";
import Cloudinary from "../Cloudinary/Cloudinary";
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
      }
    }
  };

  return (
    //     <div className=" d-flex justify-content-center ">
    //       <div class="col">
    //         <div class="input-group mb-3">
    //           <div class="input-group-prepend">
    //             <span class="input-group-text" id="basic-addon1">
    //               Video Title
    //             </span>
    //           </div>
    //           <input
    //             type="text"
    //             class="form-control"
    //             placeholder="Username"
    //             aria-label="Username"
    //             aria-describedby="basic-addon1"
    //             onChange={(e) => {
    //               setTitle(e.target.value);
    //             }}
    //           />
    //         </div>

    //         <div class="input-group mb-3">
    //           <input
    //             type="text"
    //             class="form-control"
    //             placeholder="Recipient's username"
    //             aria-label="Recipient's username"
    //             aria-describedby="basic-addon2"
    //             onChange={(e) => {
    //               setcategory(e.target.value);
    //             }}
    //           />
    //           <div class="input-group-append">
    //             <span class="input-group-text" id="basic-addon2">
    //               Categories
    //             </span>
    //           </div>
    //         </div>

    //         <label for="basic-url">Video background image</label>
    //         <div class="input-group mb-3">
    //           <div class="input-group-prepend">
    //             <span class="input-group-text" id="basic-addon3">
    //               https://example.com/users/
    //             </span>
    //           </div>
    //           <input
    //             type="file"
    //             class="form-control"
    //             id="basic-url"
    //             aria-describedby="basic-addon3"
    //             onChange={(e) => {
    //               setimage(e.target.value);
    //             }}
    //           />
    //         </div>

    //         <label for="basic-url">Video Link</label>
    //         <div class="input-group mb-3">
    //           <div class="input-group-prepend">
    //             <span class="input-group-text" id="basic-addon3">
    //               upload
    //             </span>
    //           </div>
    //           <input
    //             type="file"
    //             class="form-control"
    //             id="basic-url"
    //             aria-describedby="basic-addon3"
    //             onChange={(e) => {
    //               setvideo_link(e.target.value);
    //             }}
    //           />
    //         </div>

    //         {/* <div class="input-group mb-3">
    //   <div class="input-group-prepend">
    //     <span class="input-group-text">$</span>
    //   </div>
    //   <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
    //   <div class="input-group-append">
    //     <span class="input-group-text">.00</span>
    //   </div>
    // </div> */}

    //         <div class="input-group">
    //           <div class="input-group-prepend">
    //             <span class="input-group-text">Video Description</span>
    //           </div>
    //           <textarea
    //             class="form-control"
    //             aria-label="With textarea"
    //             onChange={(e) => {
    //               setdescription(e.target.value);
    //             }}
    //           ></textarea>
    //         </div>
    //         <button
    //           type="button"
    //           class="btn btn-danger"
    //           onClick={(e) => {
    //             createNewVideo();
    //           }}
    //         >
    //           Create New Video
    //         </button>
    //         </div>
    //         </div>
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
        {/* <div className="product-price">
    <input
      type="number"
      id="actual-price"
      placeholder="video image"
      className="inputprod"
      onChange={(e) => {
        setimage(e.target.value);
      }}
    />
    <input
      type="number"
      id="discount"
      placeholder="Video image"
      className="inputprod"
    />
  </div> */}
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

          <Cloudinary setImage={setvideo_link} />
        </div>

        {/* <input type="checkbox" className="checkbox" id="tac" checked />
  <label for="tac">OpenSooq take 5% from your total sell</label> */}
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
          {/* <button className="btn" id="save-btn">
      save draft
    </button> */}
        </div>
      </div>
    </div>
  );
};

export default CreateNewVideo;
