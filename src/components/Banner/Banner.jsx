import React, { useEffect,useState } from "react";
import "./Banner.css";
import banner from "../../assets/netflix_banner_img.jpg";
import { FaPlay, FaPlus, FaSearch } from "react-icons/fa";
import symbol from "../../assets/Netflix_Symbol_CMYK.png";
import topten from "../../assets/TopTen.png";
import axios from '../API/Axios'
import { API_KEY } from "../API/URL";
import { imgUrl } from "../API/URL";


function Banner() {

  const [movieList,setMovieList]= useState([])

  useEffect(()=>{
      axios.get(`trending/movie/day?api_key=${API_KEY}&language=en-US`)
      .then(response=>{
        setMovieList(response.data.results[Math.floor(Math.random()*20)])
      })


  },[])

  console.log(movieList)

  return (
    <section className="banner">
      <div className="bg-img" style={{ backgroundImage: `url(${movieList? imgUrl+movieList.backdrop_path:""})` }}>
        <div className="content_wrapper">
       
        <div className="content">
          <div className="series">
            <img className="symbol" src={symbol} alt="Symbol" />
            <p className="text-uppercase mt-3">{movieList? movieList.media_type:""}</p>
          </div>
          <h1 className="title">{movieList? movieList.title:""}</h1>
          <h3 className="caption">
            <img
              src={topten}
              style={{ width: "15px", marginRight: "0.4rem" }}
              alt=""
            />
            #1 in TV Shows Today
          </h3>
          <p className="description">
            {movieList? movieList.overview:""} 
          </p>
          <div className="banner_buttons">
            <button className="button">
              <FaPlay style={{ marginRight: "0.5rem" }} />
              Play
            </button>
            <button className="button">
              <FaPlus style={{ marginRight: "0.5rem" }} />
              My List
            </button>
          </div>
        </div>
        </div>
        

        <div className="fade_bottom"></div>
      </div>
    </section>
  );
}

export default Banner;
