import React,{useState,useEffect} from 'react'
import MovieExtra from '../components/MovieExtra'
import {Link } from 'react-router-dom'
function MovieDetail(props) {

  useEffect( ()=>{
    getSingleMovie();
    // eslint-disable-next-line
    
  },[]);

  const [movie,setMovieDetail]= useState({});
  const [trailer,setTrailer]=useState({});
  const getSingleMovie = async()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52`);
    
    const data = await response.json();
    console.log(data);


    const responseTrailer = await fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}/videos?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US`);

    const dataTrailer = await responseTrailer.json();


    setTrailer(dataTrailer.results[0]);
    setMovieDetail(data);
  }






  return (
 
<div>
    <div className="movie-detail" style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'top'
    }}>
   
    <div className="back" >
      <h1><Link to="/"><i className="fas fa-chevron-left"></i></Link></h1>
    </div>

     <div className="details">

     <div className="details-img">
     <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} style={{width:'300px'}} alt=""/>
     </div>
     <div className="details-extra">
     <MovieExtra movie={movie}/>
     </div>
    
    
    </div>
    
    </div>
    
    <div className="summary">
    <div className="container">
    <h1 className="mb">Summary</h1>
    <p className="mb">{movie.overview}</p>
    <h1 className="mb">Trailer</h1>
      <div className="trailer mb">
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      
      </div>
      <h1 className="mb">Cast</h1>
    </div>
    </div>
      
    </div>
  
    
  )
}



export default MovieDetail
