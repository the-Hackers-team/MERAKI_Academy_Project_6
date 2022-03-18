import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

import Cloudinary from "../Cloudinary/Cloudinary";
// import { useNavigate, useEffect, useParams } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "./updateVideo.css";

toast.configure();
const UpdateAnVideoById = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [video_link, setvideo_link] = useState("");

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  let { id } = useParams();

  const getVideoById = () => {
    axios
      .get(`http://localhost:5000/video/search_1?id=${id}`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setTitle(response.data.results[0].title);
        setDescription(response.data.results[0].description);
        setimage(response.data.results[0].image);
        setcategory(response.data.results[0].category);
        setvideo_link(response.data.results[0].video_link);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const updateAnVideoById = () => {
    axios
      .put(
        `http://localhost:5000/video/update/${id}`,
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
  };

  useEffect(() => {
    getVideoById();
  }, []);

  return (
    // <>
    //   <span className="create">Update Product</span>

    //   <div className="form">
    //     <input
    //       type="text"
    //       defaultValue={title}
    //       id="product-name"
    //       placeholder="product name"
    //       className="inputprod"
    //       onChange={(e) => {
    //         setTitle(e.target.value);
    //       }}
    //     />
    //     <input
    //       type="text"
    //       id="short-des"
    //       placeholder="short line about the product"
    //       className="inputprod"
    //     />
    //     <textarea
    //       className="text-area"
    //       id="des"
    //       defaultValue={description}
    //       placeholder="detail description"
    //       onChange={(e) => {
    //         setDescription(e.target.value);
    //       }}
    //     ></textarea>

    //     <div className="product-price">
    //       <input
    //         type="file"
    //         defaultValue={image}
    //         id="actual-price"
    //         placeholder="background image"
    //         className="inputprod"
    //         onChange={(e) => {
    //           setimage(e.target.value);
    //         }}
    //       />
    //       <input
    //         type="file"
    //         defaultValue={video_link}
    //         id="actual-price"
    //         placeholder="update video Link"
    //         className="inputprod"
    //         onChange={(e) => {
    //           setvideo_link(e.target.value);
    //         }}
    //       />
    //     </div>

    //     <input
    //       type="number"
    //       id="stock"
    //       min="20"
    //       placeholder="item in stocks"
    //       className="inputprod"
    //     />

    //     <textarea
    //       className="text-area"
    //       id="tags"
    //       defaultValue={category}
    //       placeholder="Enter categories here, for example - cars, Electonics, Clothes, "
    //       onChange={(e) => {
    //         setcategory(e.target.value);
    //       }}
    //     ></textarea>

    //     <div className="buttons">
    //       <button
    //         className="btn"
    //         onClick={() => {
    //           Swal.fire({
    //             title: "Do you want to save the changes?",
    //             showDenyButton: true,
    //             showCancelButton: true,
    //             confirmButtonText: "Save",
    //             confirmButtonColor: "#4267b3",
    //             denyButtonText: `Don't save`,
    //           }).then((result) => {
    //             if (result.isConfirmed) {
    //               updateAnVideoById();
    //               Swal.fire("Saved!", "", "success");
    //             } else if (result.isDenied) {
    //               Swal.fire("Changes are not saved", "", "info");
    //             }
    //           });
    //         }}
    //       >
    //         update product
    //       </button>
    //       <button className="btn" id="save-btn">
    //         save draft
    //       </button>
    //     </div>
    //   </div>
    // </>
    //     <div className="main-update">
    //     <div className="sub-update">

    //   <div class="row mb-4">
    //     <div class="col">
    //       <div class="form-outline">
    //         <input type="text" id="form6Example1" class="form-control" />
    //         <label class="form-label" for="form6Example1">First name</label>
    //       </div>
    //     </div>
    //     <div class="col">
    //       <div class="form-outline">
    //         <input type="text" id="form6Example2" class="form-control" />
    //         <label class="form-label" for="form6Example2">Last name</label>
    //       </div>
    //     </div>
    //   </div>

    //   <div class="form-outline mb-4">
    //     <input type="text" id="form6Example3" class="form-control" />
    //     <label class="form-label" for="form6Example3">Company name</label>
    //   </div>

    //   <div class="form-outline mb-4">
    //     <input type="text" id="form6Example4" class="form-control" />
    //     <label class="form-label" for="form6Example4">Address</label>
    //   </div>

    //   <div class="form-outline mb-4">
    //     <input type="email" id="form6Example5" class="form-control" />
    //     <label class="form-label" for="form6Example5">Email</label>
    //   </div>

    //   <div class="form-outline mb-4">
    //     <input type="number" id="form6Example6" class="form-control" />
    //     <label class="form-label" for="form6Example6">Phone</label>
    //   </div>
    //   <div class="form-outline mb-4">
    //     <input type="file" id="form6Example6" class="form-control" />
    //     <label class="form-label" for="form6Example6">Phone</label>
    //   </div>

    //   <div class="form-outline mb-4">
    //     <textarea class="form-control" id="form6Example7" rows="4"></textarea>
    //     <label class="form-label" for="form6Example7">Additional information</label>
    //   </div>

    //   <div class="form-check d-flex justify-content-center mb-4">
    //     <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
    //     <label class="form-check-label" for="form6Example8"> Create an account? </label>
    //   </div>

    //   <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>

    // </div>
    // </div>
    <div className="create-new-video-main">
      <span className="create">Update Video</span>

      <div className="form">
        <input
          type="text"
          id="product-name"
          placeholder="video title"
          className="inputprod"
          defaultValue={title}
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
          defaultValue={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>

        <br />
        <br />
        <textarea
          className="text-area"
          id="tags"
          defaultValue={category}
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
                  updateAnVideoById();
                  Swal.fire("Saved!", "", "success");
                } else if (result.isDenied) {
                  Swal.fire("Changes are not saved", "", "info");
                }
              });
            }}
          >
            Update Video
          </button>
          {/* <button className="btn" id="save-btn">
      save draft
    </button> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateAnVideoById;
