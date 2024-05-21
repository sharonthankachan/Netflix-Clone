import React from 'react'
import './MoviesSection.css'
import { useState, useEffect } from 'react'
import axios from '../API/Axios'
import { imgUrl } from "../API/URL";


function MoviesSection(props) {

  const [movieList,setMovieList]= useState([])

  useEffect(()=>{
    axios.get(`${props.imgGenre}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
      .then(response=>{
        console.log("movie list:",movieList)
        setMovieList(response.data.results)
      })

  },[])

  return (
    <section className='movie_section'>
        <div className="contents">
            <h3>{props.h3}</h3>
            <div className={props.movie_row_class}>
                {movieList.map((item, index)=>(<div key={index} className='movie_card'><img src={item? imgUrl+item[props.image]:""} alt="movie" className={props.img_class} />
                <p className='text-center mt-1'>{item && item[props.whichImage]? item[props.whichImage] : 'Unknown'}</p></div>))}
            </div>
        </div>
    </section>
  )
}

export default MoviesSection