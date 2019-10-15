import React from 'react'
import mvicon from '../movie-icon.svg'

import {Link} from 'react-router-dom';
function Navbar(props) {


  const getTrending =()=>{
   
    props.getMovies('popular');
  }
  const getReleases =()=>{
   
    props.getMovies('now_playing');
  }

  const getLater =()=>{
   
    props.getMovies('top_rated');
  }

  const getSoon =()=>{
  
    props.getMovies('upcoming');
  }

  return (
    <div>
      <nav>
       
       <div className="logo">
      <img src={mvicon} alt=""/> MEDIA APP
       </div>

      <ul className="movie-categories">
           <li onClick={getReleases}><Link to="/">New Releases</Link></li>   
           <li onClick={getTrending}><Link to="/">Trending</Link></li>  
           <li onClick={getSoon}><Link to="/">Coming Soon</Link></li>  
           <li onClick={getLater}><Link to="/">Watch later</Link></li>  
      </ul>
      <h3 className="categories-header">Categories</h3>
      <ul className="movie-sub-categories">
           <li>Horror</li>   
           <li>Action</li>  
           <li>Adventure</li>  
           <li>Animated</li>  
           <li>Drama</li> 
           <li>Tv Shows</li>
           <li>Comedy</li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
