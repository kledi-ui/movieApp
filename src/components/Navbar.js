import React,{useContext} from 'react'
import mvicon from '../movie-icon.svg'
import Img from '../movieicon.svg'
import MovieContext from '../context/movie/movieContext';
function Navbar() {

  
  const movieContext  = useContext(MovieContext);
  
  const getLater =()=>{
    
   

    movieContext.getMovies('top_rated');
    movieContext.changeCurrentIndex(1);
  }

  const getTrending =()=>{
 
    movieContext.getMovies('popular');
    movieContext.changeCurrentIndex(1);
  }


  const getReleases =()=>{
   if(movieContext.status==='movie'){
    movieContext.getMovies('now_playing');
   }else if(movieContext.status==='tv'){
    movieContext.getMovies('airing_today');
   }
   movieContext.changeCurrentIndex(1);
  }

  const getSoon =()=>{
    if(movieContext.status==='movie'){
      movieContext.getMovies('upcoming');
     }else if(movieContext.status==='tv'){
      movieContext.getMovies('on_the_air');
     }
     movieContext.changeCurrentIndex(1);
  }


  const getHorrorMovie =()=>{
    
    movieContext.getMoviesGenre(27);
    movieContext.emptyArrayMovie();
  }
  const getRomanceMovie =()=>{
  
    movieContext.getMoviesGenre(10749);
    movieContext.emptyArrayMovie();
  }
  const getAdventureMovie =()=>{
  
    movieContext.getMoviesGenre(12);
    movieContext.emptyArrayMovie();
  }
  const getAnimatedMovie =()=>{
  
    movieContext.getMoviesGenre(16);
    movieContext.emptyArrayMovie();
  }
  const getDramaMovie =()=>{
  
    movieContext.getMoviesGenre(18);
    movieContext.emptyArrayMovie();
  }
  const getComedyMovie =()=>{
  
    movieContext.getMoviesGenre(35);
    movieContext.emptyArrayMovie();
  }

  return (
    <div>
      <nav>
       
       <div className="logo">
      <img src={mvicon} alt=""/> MEDIA APP
       </div>

      <ul className="movie-categories">
            {movieContext.status==='movie' ?<li onClick={getReleases}>New Releases</li> :
          <li onClick={getReleases}>Airing Today</li> }
           
           <li onClick={getTrending}>Trending</li>    
           {movieContext.status==='movie' ?<li onClick={getSoon}>Coming Soon</li> :
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
