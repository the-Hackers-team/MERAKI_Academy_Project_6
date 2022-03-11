import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PlayVideo.css";
const PlayVideo = () => {
  return (
    <div className="container-Play-video play-container">
      <div className="row-video">
        <div className="play-video">
          <video controls autoplay>
          <source src="images/video.mp4" type="video/mp4" />
          {/* <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/gb429WQuAFo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          </video>
          <div className="tags">
            <Link to="">#Çukur</Link>
            <Link to="">#turkish</Link>
            <Link to="">#YamaÇ</Link>
            <Link to="">#final</Link>
          </div>

          <h3>Çukur | Vartolu'ya Darp Girişimi!</h3>
          <div className="play-video-info">
            <p>1225 Views &bull; 2 days ago</p>
            <div>
              <Link to="">
                <span className="material-icons-outlined">thumb_up</span>
                125
              </Link>
              <Link to="">
                <span className="material-icons-outlined">thumb_down</span>2
              </Link>
              <Link to="">
                <span className="material-icons-outlined">reply</span>
                Share
              </Link>
              <Link to="">
                <span className="material-icons-outlined">playlist_add</span>
                Save
              </Link>
            </div>

            <hr />
            <div className="plublisher">
              <img
                src="https://yt3.ggpht.com/rRUV5q0QfElMrQSfSf9l1QgxKy7KxRDTn9ri_PTBNKfBqwmVtR1-SoNfXNFlGxkuGR_2NIuKkA=s176-c-k-c0x00ffffff-no-rj-mo"
                alt=""
              />
              <div>
                <p>
                  Cukur <span className="material-icons">check_circle</span>
                </p>
                <span>500k Subscribers</span>
              </div>
              <button type="button">Subscribe</button>
            </div>
            <div className="vid-description">
              <p>Channel that makes learning easy</p>
              <p>
                Subscribe Easy Tutorials to watch more tutorials on wev
                development
              </p>
              <hr />
              <h4>134 Comments</h4>

              <div className="add-comment">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
                <input type="text" placeholder="Write comments..." />
              </div>
              <div className="old-comment">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
                <div>
                  <h3>
                    Jack Nicholson <span>2 days ago</span>
                  </h3>
                  <p>
                    A global computer network providing a variety of information
                    and communication facilities, consisting of interconnected
                    networks using standardized communication protocols.
                  </p>
                  {/* <div className="acomment-action">
                    <span className="material-icons-outlined">thumb_up</span>
                    <span>244</span>
                    <span className="material-icons-outlined">thumb_down</span>
                    <span>2</span>
                    <span>REPLY</span>
                   <Link to ="">All replies</Link >
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar-video">
          <div className="side-video-list">
            <Link to="" className="small-thumbnail">
              <img
                src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg"
                alt=""
              />
            </Link>
            <div className="vid-info">
              <Link to="">
                Top 5 Programming Languages to Learn in 2021 | Best Programming
                Languages to Learn
              </Link>
              <p>Easy Tutorials</p>
              <p>10M Views • 3 Months Ago</p>
            </div>
          </div>
          <div className="side-video-list">
            <Link to="" className="small-thumbnail">
              <img
                src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg"
                alt=""
              />
            </Link>
            <div className="vid-info">
              <Link to="">
                Top 5 Programming Languages to Learn in 2021 | Best Programming
                Languages to Learn
              </Link>
              <p>Easy Tutorials</p>
              <p>10M Views • 3 Months Ago</p>
            </div>
          </div>

          <div className="side-video-list">
            <Link to="" className="small-thumbnail">
              <img
                src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg"
                alt=""
              />
            </Link>
            <div className="vid-info">
              <Link to="">
                Top 5 Programming Languages to Learn in 2021 | Best Programming
                Languages to Learn
              </Link>
              <p>Easy Tutorials</p>
              <p>10M Views • 3 Months Ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
