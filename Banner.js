import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ];
      setMovie(randomMovie);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover ",
        width: "auto",
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,
        opacity: 0.9,
        backgroundPosition: "center center ",
      }}
    >
      <div className="bannercomponents">
        <h1>{movie?.title || movie?.name || movie.original_name}</h1>

        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h3 className="banner_description">{`${movie.overview}`}</h3>
      </div>
      <div className="banner_fadebutton"></div>
    </header>
  );
}

export default Banner;
