import React,{useState,useEffect} from 'react'

function MovieDetail(props) {

  const [movie,setMovieDetail]= useState({});

  const getSingleMovie = async(id)=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52`);
    
    const data = await response.json();

    console.log(data);
    setMovieDetail(data);
  }

 
  useEffect(()=>{
    getSingleMovie(props.match.params.id);
  },[]);


  return (
    <div className="movie-detail" style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'top'
    }}>
    <div className="details">
    <h1>{movie.title}</h1>
    </div>
      
    </div>
  )
}



export default MovieDetail
