import React, { useState, useEffect } from "react";
import "../styles.css";
import axios from "axios";

import profileImg from "../images/ombre_profile_img.jpg";
import highlights1 from "../images/highlights1.jpg";
import highlights2 from "../images/highlights2.jpg";
import highlights3 from "../images/highlights3.jpg";
import highlights4 from "../images/highlights4.jpg";

import Grid from "@material-ui/core/Grid";

import Posts from "../components/Posts";

function Header() {
  const [image, setImage] = useState(null);
  const [getData, setGetData] = useState([]);
  const [data, setData] = useState(false);
  const [postCount, setPostCount] = useState(0);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData(false);
    if (image) {
      const formData = new FormData();
      formData.append("instaImage", image);

      const res = await axios.post("/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res...", res.data.msg);
      setData(true);
    }
  };

  useEffect(() => {
    const getImages = async () => {
      const imgUrls = await axios.get("/get-images");
      setGetData(imgUrls.data);

      setPostCount(imgUrls.data.length);
    };
    getImages();
  }, [data]);

  return (
    <>
      <main className="main-profile">
        <div className="profile-area">
          <header className="profile-header">
            <div className="profile-img-area">
              <img src={profileImg} className="profile-img" alt="profile pic" />
            </div>
            <section className="profile-info">
              <div className="profile-info-details">
                <div className="profile-name">
                  <h2>livewithombre</h2>
                </div>
                <div className="upload-btn">
                  <form onSubmit={handleSubmit}>
                    <label for="file-upload" className="custom-file-upload">
                      Select file
                    </label>
                    <input id="file-upload" type="file" onChange={handleImage} />
                    &nbsp;&nbsp;
                    <button type="submit">Upload</button>
                  </form>{" "}
                </div>
              </div>
              <ul className="list">
                <li className="list-items">
                  <b>{postCount}</b> posts
                </li>
                <li className="list-items">
                  <b>0</b> followers
                </li>
                <li className="list-items">
                  <b>0</b> following
                </li>
              </ul>
              {/* show above 736px */}
              <div className="profile-bio">
                <h1 className="profile-username">Ombre | Hub for Live Music</h1>
                <br />
                <span style={{ color: "#8e8e8e" }}>App Page</span>
                <br />
                <span className="text-span">
                  Sharing 𝐋𝐈𝐕𝐄 streaming music around the 🌎
                  <br />
                  Running round the clock for you 🎧
                  <br />
                  DM for collaboration for events 🔐
                  <br />
                  ⬇️ Check out our app! ⬇️
                  <br />
                </span>
                <a
                  className="profile-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://linktr.ee/Livewithombre"
                >
                  linktr.ee/Livewithombre
                </a>
              </div>
            </section>
          </header>
          <br />
          {/* show below 736px */}
          <div className="profile-bio-show">
            <h1 className="profile-username">Ombre | Hub for Live Music</h1>
            <br />
            <span style={{ color: "#8e8e8e" }}>App Page</span>
            <br />
            <span className="text-span">
              Sharing 𝐋𝐈𝐕𝐄 streaming music around the 🌎
              <br />
              Running round the clock for you 🎧
              <br />
              DM for collaboration for events 🔐
              <br />
              ⬇️ Check out our app! ⬇️
              <br />
            </span>
            <a
              className="profile-link"
              target="_blank"
              rel="noreferrer"
              href="https://linktr.ee/Livewithombre"
            >
              linktr.ee/Livewithombre
            </a>
          </div>
          <div className="highlights-area">
            <div className="highlights">
              <ul className="highlights-ul">
                <li className="highlights-li">
                  <div className="canvas">
                    <canvas
                      height="87"
                      width="87"
                      style={{
                        position: "absolute",
                        width: "87px",
                        height: "87px",
                      }}
                    ></canvas>
                  </div>
                  <div className="highlights-img">
                    <img src={highlights1} alt="hightlight1" />
                  </div>
                  <div className="highlight-text">Reviews</div>
                </li>
                <li className="highlights-li">
                  {" "}
                  <div className="canvas">
                    <canvas
                      height="87"
                      width="87"
                      style={{
                        position: "absolute",
                        width: "87px",
                        height: "87px",
                      }}
                    ></canvas>
                  </div>
                  <div className="highlights-img">
                    <img src={highlights2} alt="hightlight2" />
                  </div>
                  <div className="highlight-text">Campus</div>
                </li>
                <li className="highlights-li">
                  {" "}
                  <div className="canvas">
                    <canvas
                      height="87"
                      width="87"
                      style={{
                        position: "absolute",
                        width: "87px",
                        height: "87px",
                      }}
                    ></canvas>
                  </div>
                  <div className="highlights-img">
                    <img src={highlights3} alt="hightlight3" />
                  </div>
                  <div className="highlight-text">Website</div>
                </li>
                <li className="highlights-li">
                  {" "}
                  <div className="canvas">
                    <canvas
                      height="87"
                      width="87"
                      style={{
                        position: "absolute",
                        width: "87px",
                        height: "87px",
                      }}
                    ></canvas>
                  </div>
                  <div className="highlights-img">
                    <img src={highlights4} alt="hightlight4" />
                  </div>
                  <div className="highlight-text">App</div>
                </li>
              </ul>
            </div>
          </div>

          {/* show below 736px */}
          <ul className="profile-desc-show">
            <li className="profile-desc">
              <span>
                <span>{postCount}</span> posts
              </span>
            </li>
            <li className="profile-desc">
              <span>
                <span>0</span> followers
              </span>
            </li>
            <li className="profile-desc">
              <span>
                <span>0</span> following
              </span>
            </li>
          </ul>

          {/* show above 736px */}
          <div className="posts-header links-posts">
            <a href="!#" className="posts-header-links header-link">
              <span>
                <svg
                  aria-label="Posts"
                  className="header-svg"
                  fill="#262626"
                  height="12"
                  viewBox="0 0 48 48"
                  width="12"
                >
                  <path
                    clipRule="evenodd"
                    d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="header-svg-span">POSTS</span>
              </span>
            </a>

            <a href="!#" className="posts-header-links">
              <span>
                <svg
                  aria-label="Reels"
                  className="header-svg"
                  fill="#8e8e8e"
                  height="12"
                  viewBox="0 0 48 48"
                  width="12"
                >
                  <path d="M31.5 28.2l-11.2-6.5c-.5-.3-1-.3-1.5 0-.5.2-.8.7-.8 1.3v13c0 .5.3 1 .8 1.3.2.1.5.2.7.2.3 0 .5-.1.8-.2l11.2-6.5c.5-.3.7-.8.7-1.3s-.3-1-.7-1.3zM43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zM31.8 3c6.3 0 8.4 1.6 10 3.2 1.2 1.2 2.3 2.7 2.9 5.8h-9.3l-5.1-9h1.5zM16.2 3h10.5l5.1 9h-12l-5.1-9h1.5zm-10 3.2C7.3 5.1 8.7 4 11.5 3.4l4.9 8.6H3.3C3.9 8.9 5 7.4 6.2 6.2zM45 31.8c0 6.3-1.6 8.4-3.2 10-1.6 1.6-3.8 3.2-10 3.2H16.2c-6.3 0-8.4-1.6-10-3.2C4.6 40.2 3 38 3 31.8V15h42v16.8z"></path>
                </svg>
                <span className="header-svg-span">REELS</span>
              </span>
            </a>

            <a href="!#" className="posts-header-links">
              <span>
                <svg
                  aria-label="Posts"
                  className="header-svg"
                  fill="#8e8e8e"
                  height="12"
                  viewBox="0 0 48 48"
                  width="12"
                >
                  <path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
                </svg>
                <span className="header-svg-span">IGTV</span>
              </span>
            </a>

            <a href="!#" className="posts-header-links">
              <span>
                <svg
                  aria-label="Tagged"
                  className="header-svg"
                  fill="#8e8e8e"
                  height="12"
                  viewBox="0 0 48 48"
                  width="12"
                >
                  <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
                </svg>
                <span className="header-svg-span">TAGGED</span>
              </span>
            </a>
          </div>

          {/* show below 736px */}
          <div className="header-links-icons">
            <a href="!#" className="posts-header-links header-link">
              <svg
                aria-label="Posts"
                class="_8-yf5 "
                fill="#0095f6"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  clip-rule="evenodd"
                  d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="!#" className="posts-header-links">
              <svg
                aria-label="Reels"
                class="_8-yf5 "
                fill="#8e8e8e"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M31.5 28.2l-11.2-6.5c-.5-.3-1-.3-1.5 0-.5.2-.8.7-.8 1.3v13c0 .5.3 1 .8 1.3.2.1.5.2.7.2.3 0 .5-.1.8-.2l11.2-6.5c.5-.3.7-.8.7-1.3s-.3-1-.7-1.3zM43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zM31.8 3c6.3 0 8.4 1.6 10 3.2 1.2 1.2 2.3 2.7 2.9 5.8h-9.3l-5.1-9h1.5zM16.2 3h10.5l5.1 9h-12l-5.1-9h1.5zm-10 3.2C7.3 5.1 8.7 4 11.5 3.4l4.9 8.6H3.3C3.9 8.9 5 7.4 6.2 6.2zM45 31.8c0 6.3-1.6 8.4-3.2 10-1.6 1.6-3.8 3.2-10 3.2H16.2c-6.3 0-8.4-1.6-10-3.2C4.6 40.2 3 38 3 31.8V15h42v16.8z"></path>
              </svg>
            </a>
            <a href="!#" className="posts-header-links">
              <svg
                aria-label="Posts"
                class="_8-yf5 "
                fill="#8e8e8e"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
              </svg>
            </a>
            <a href="!#" className="posts-header-links">
              <svg
                aria-label="Tagged"
                class="_8-yf5 "
                fill="#8e8e8e"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
              </svg>
            </a>
          </div>

          <div className="posts-card">
            <Grid container direction="row" alignItems="center" spacing={2}>
              {getData && getData.map((img) => <Posts {...img} />)}
              {/* <Grid item sm={4}>
                <img src={img3} alt="img3" className="postsImg" />
              </Grid>
              <Grid item sm={4}>
                <img src={img3} alt="img3" className="postsImg" />
              </Grid>
              <Grid item sm={4}>
                <img src={img3} alt="img3" className="postsImg" />
              </Grid>
              <Grid item sm={4}>
                <img src={img3} alt="img3" className="postsImg" />
              </Grid>
              <Grid item sm={4}>
                <img src={img3} alt="img3" className="postsImg" />
              </Grid> */}
            </Grid>
          </div>
        </div>
      </main>
    </>
  );
}

export default Header;
