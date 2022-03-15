import React from "react";
import Sidebar from "../SideBar/Sidebar";
import { Link } from "react-router-dom";
import "./Home.css";
import Categories from "../Categories/Categories";
const menuIcon = document.querySelector(".logo");
const Home = () => {
  return (
    <div className="videos">
      <Categories />
      <h1>Recommended</h1>

      <div className="videos__container">
        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img src="profile.png" alt="" />
            </div>
            <div className="title">
              <h3>
                Top 5 Programming Languages to Learn in 2021 | Best Programming
                Languages to Learn
              </h3>
              <Link to="">FutureCoders</Link>
              <span>10M Views • 3 Months Ago</span>
            </div>
          </div>
        </div>
        {/* 
        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img src="profile.png" alt="" />
            </div>
            <div className="title">
              <h3>
                Build A Password Generator with React JS - Beginners Tutorial
              </h3>
              <Link to="">FutureCoders</Link>
              <span>10M Views • 3 Months Ago</span>
            </div>
          </div>
        </div> */}

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>
                Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix
                India
              </h3>
              <Link to="">Netflix</Link>
              <span>10M Views • 11 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>DON'T EVER GIVE UP - Elon Musk (Motivational Video)</h3>
              <Link to=""> Chispa Motivation</Link>
              <span>10M Views • 1 Month Ago</span>
            </div>
          </div>
        </div>

        {/* <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>Javascript Fundamentals</h3>
              <Link to="">Coding Addict</Link>
              <span>179K • 8 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
              <Link to=""> freeCodeCamp.org </Link>
              <span>470K Views • 8 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/CVClHLwv-4I/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>Build Real Time Face Detection With JavaScript</h3>
              <Link to=""> Web Dev Simplified </Link>
              <span>875K Views • 1 Year Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/ulprqHHWlng/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>AWS Basics for Beginners - Full Course</h3>
              <Link to=""> freeCodeCamp.org </Link>
              <span>36K Views • 1 Day Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img src="profile.png" alt="" />
            </div>
            <div className="title">
              <h3>
                Top 5 Programming Languages to Learn in 2021 | Best Programming
                Languages to Learn
              </h3>
              <Link to="">FutureCoders</Link>
              <span>10M Views • 3 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img src="profile.png" alt="" />
            </div>
            <div className="title">
              <h3>
                Build A Password Generator with React JS - Beginners Tutorial
              </h3>
              <Link to="">FutureCoders</Link>
              <span>10M Views • 3 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>
                Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix
                India
              </h3>
              <Link to="">Netflix</Link>
              <span>10M Views • 11 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>DON'T EVER GIVE UP - Elon Musk (Motivational Video)</h3>
              <Link to=""> Chispa Motivation</Link>
              <span>10M Views • 1 Month Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/2Ji-clqUYnA/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwniaHN7MZyFEiNvdHuKMzIWnDF604Z2--O4GCMq-FA=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>Javascript Fundamentals</h3>
              <Link to="">Coding Addict</Link>
              <span>179K • 8 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/3PHXvlpOkf4/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>Build 15 JavaScript Projects - Vanilla JavaScript Course</h3>
              <Link to=""> freeCodeCamp.org </Link>
              <span>470K Views • 8 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/CVClHLwv-4I/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>Build Real Time Face Detection With JavaScript</h3>
              <Link to=""> Web Dev Simplified </Link>
              <span>875K Views • 1 Year Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/ulprqHHWlng/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>AWS Basics for Beginners - Full Course</h3>
              <Link to=""> freeCodeCamp.org </Link>
              <span>36K Views • 1 Day Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/PpXUTUXU7Qc/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img src="profile.png" alt="" />
            </div>
            <div className="title">
              <h3>
                Top 5 Programming Languages to Learn in 2021 | Best Programming
                Languages to Learn
              </h3>
              <Link to="">FutureCoders</Link>
              <span>10M Views • 3 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/YpTmcCBBdTE/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img src="profile.png" alt="" />
            </div>
            <div className="title">
              <h3>
                Build A Password Generator with React JS - Beginners Tutorial
              </h3>
              <Link to="">FutureCoders</Link>
              <span>10M Views • 3 Months Ago</span>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/46cXFUzR9XM/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnh53ZRIGnyzC28QrfuggCINb3cfNbNWo4Uc6qR9=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>
                Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix
                India
              </h3>
              <Link to="">Netflix</Link>
              <span>10M Views • 11 Months Ago</span>
            </div>
          </div>
        </div> */}
        {/* 
        <div className="video">
          <div className="video__thumbnail">
            <img
              src="https://img.youtube.com/vi/d2na6sCyM5Q/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="video__details">
            <div className="author">
              <img
                src="https://yt3.ggpht.com/ytc/AAUvwnhESPVEatju_1yE-03-KLeSrnSLc5yy0RcvhPd5Lg=s48-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div className="title">
              <h3>DON'T EVER GIVE UP - Elon Musk (Motivational Video)</h3>
              <Link to=""> Chispa Motivation</Link>
              <span>10M Views • 1 Month Ago</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
