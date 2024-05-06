import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import MoviesSection from './components/MoviesSection/MoviesSection'
import { Carousel } from "react-bootstrap";



function App(h3,img_class,movie_row_class) {
  return (
    <div>
        <Navbar/>
        <Banner/> 
        <MoviesSection h3="Top Picks For You" img_class="movie_img" movie_row_class="movie_row" imgGenre='tv/popular' image='poster_path' whichImage="name"/>
        {/* <div className='d-flex justify-content-center'>
        <iframe width="800" height="400" src="https://www.youtube.com/embed/ucr9puXoizY?si=Bk3d28uBbExUr4xU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> */}
        <MoviesSection h3="Upcoming" img_class="movie_img2" movie_row_class="movie_row2" imgGenre='movie/upcoming' image='poster_path' whichImage='title'/>
        <MoviesSection h3="Now Playing" img_class="movie_img2" movie_row_class="movie_row2" imgGenre='movie/now_playing' image='poster_path' whichImage='title'/>
        <MoviesSection h3="Top Rated" img_class="movie_img2" movie_row_class="movie_row2" imgGenre='movie/top_rated' image='poster_path' whichImage='title'/>
    </div>
  )
}

export default App