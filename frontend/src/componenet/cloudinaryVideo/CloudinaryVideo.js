import React from "react";
import { useState } from "react";
import axios from "axios";

const CloudinaryVideo = ({ setVideo }) => {
  const [file, setFile] = useState();
  const [filelink, setFilelink] = useState("Choose File");
  const VideoUpload = (videoFile) => {
    const data = new FormData();
    data.append("file", videoFile);
    data.append("upload_preset", "y3fujtpr");
    data.append("cloud_name", "the-debuggers");

    axios
      .post(`https://api.cloudinary.com/v1_1/the-debuggers/video/upload`, data)
      .then((res) => {
        setFilelink(res.data.secure_url);
        setVideo(res.data.secure_url);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className="upload">
      <input
        onChange={(event) => {
          setFile(event.target.files[0]);
        }}
        type="file"
      ></input>
      <button
        className="btn"
        onClick={() => {
          VideoUpload(file);
        }}
      >
        Upload
      </button>
    </div>
  );
};
export default CloudinaryVideo;
