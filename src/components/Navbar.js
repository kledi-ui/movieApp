import React from 'react'
import mvicon from '../movie-icon.svg'
import Img from '../movieicon.svg'
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
  const getHorrorMovie =()=>{
  
    props.getMoviesGenre(27);
  }
  const getRomanceMovie =()=>{
  
    props.getMoviesGenre(10749);
  }
  const getAdventureMovie =()=>{
  
    props.getMoviesGenre(12);
  }
  const getAnimatedMovie =()=>{
  
    props.getMoviesGenre(16);
  }
  const getDramaMovie =()=>{
  
    props.getMoviesGenre(18);
  }
  const getComedyMovie =()=>{
  
    props.getMoviesGenre(35);
  }

  return (
    <div>
      <nav>
       
       <div className="logo">
      <img src={mvicon} alt=""/> MEDIA APP
       </div>

      <ul className="movie-categories">
           <li onClick={getReleases}>New Releases</li>
           <li onClick={getTrending}>Trending</li>  
           <li onClick={getSoon}>Coming Soon</li>  
           <li onClick={getLater}>Watch later</li>  
      </ul>
      <h3 className="categories-header">Categories</h3>
      <ul className="movie-sub-categories mb">
           <li onClick={getHorrorMovie}>Horror</li>   
           <li onClick={getRomanceMovie}>Romance</li>  
           <li onClick={getAdventureMovie}>Adventure</li>  
           <li onClick={getAnimatedMovie}>Animated</li>  
           <li onClick={getDramaMovie}>Drama</li> 
           <li onClick={getComedyMovie}>Comedy</li>
      </ul>
      <img className="imbd"src={Img} alt="" />
      </nav>
    </div>
  )
}

export default Navbar
