import React from 'react'
import mvicon from '../movie-icon.svg'
import Img from '../movieicon.svg'
function Navbar(props) {

  
  
  
  const getLater =()=>{
   
    props.getMovies('top_rated');
    props.changeCurrentIndex(1);
  }

  const getTrending =()=>{
 
    props.getMovies('popular');
    props.changeCurrentIndex(1);
  }


  const getReleases =()=>{
   if(props.status==='movie'){
    props.getMovies('now_playing');
   }else if(props.status==='tv'){
    props.getMovies('airing_today');
   }
   props.changeCurrentIndex(1);
  }

  const getSoon =()=>{
    if(props.status==='movie'){
      props.getMovies('upcoming');
     }else if(props.status==='tv'){
      props.getMovies('on_the_air');
     }
     props.changeCurrentIndex(1);
  }


  const getHorrorMovie =()=>{
    
    props.getMoviesGenre(27);
    props.emptyArrayMovie();
  }
  const getRomanceMovie =()=>{
  
    props.getMoviesGenre(10749);
    props.emptyArrayMovie();
  }
  const getAdventureMovie =()=>{
  
    props.getMoviesGenre(12);
    props.emptyArrayMovie();
  }
  const getAnimatedMovie =()=>{
  
    props.getMoviesGenre(16);
    props.emptyArrayMovie();
  }
  const getDramaMovie =()=>{
  
    props.getMoviesGenre(18);
    props.emptyArrayMovie();
  }
  const getComedyMovie =()=>{
  
    props.getMoviesGenre(35);
    props.emptyArrayMovie();
  }

  return (
    <div>
      <nav>
       
       <div className="logo">
      <img src={mvicon} alt=""/> MEDIA APP
       </div>

      <ul className="movie-categories">
            {props.status==='movie' ?<li onClick={getReleases}>New Releases</li> :
          <li onClick={getReleases}>Airing Today</li> }
           
           <li onClick={getTrending}>Trending</li>    
           {props.status==='movie' ?<li onClick={getSoon}>Coming Soon</li> :
          <li onClick={getSoon}>On The Air</li> }
           <li onClick={getLater}>Top Rated</li>  
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
