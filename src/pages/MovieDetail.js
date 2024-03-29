import React,{useState,useEffect,useContext} from 'react'
import MovieExtra from '../components/MovieExtra'
import {Link } from 'react-router-dom'
import Person from '../components/Person'
import Swiper from 'swiper';
import MovieContext from '../context/movie/movieContext';
function MovieDetail(props) {

  const movieContext = useContext(MovieContext);
  
 new Swiper('.swiper-container', { 
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
   });



 useEffect(()=>{
  getSingleMovie();
  console.log(movieContext.status);
  
 },[]);

  const [movie,setMovieDetail]= useState({});
  const [trailer,setTrailer]=useState({});
  const [cast,setCast]=useState([]);

  const getSingleMovie = async()=>{
    const response = await fetch(`https://api.themoviedb.org/3/${movieContext.status}/${props.match.params.id}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52`);
    
    const data = await response.json();
   


    const responseTrailer = await fetch(`https://api.themoviedb.org/3/${movieContext.status}/${props.match.params.id}/videos?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US`);

    const dataTrailer = await responseTrailer.json();

    const responseCast = await fetch(`https://api.themoviedb.org/3/${movieContext.status}/${props.match.params.id}/credits?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52`);

    const dataCast = await responseCast.json();

    const finalCast = dataCast.cast.slice(0,10);
    
    setTrailer(dataTrailer.results[0]);
    setCast(finalCast);
    setMovieDetail(data);
   
    
  }


  
  



  return (
 
<div >

  {movie.backdrop_path ?  <div className="movie-detail" style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'top'
    }}>
   
    <div className="back" >
      <h1><Link to="/" style={{padding:"1rem 1rem 1rem 0rem"}}><i className="fas fa-chevron-left"></i></Link></h1>
    </div>

     <div className="details">

     <div className="details-img">
     <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  alt=""/>
     </div>
     <div className="details-extra">
     <MovieExtra status={movieContext.status} movie={movie}/>
     </div>
    
    
    </div>
    
    </div>:<div className="movie-detail" style={{
      backgroundColor:"#333",
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'top'
    }}>
   
    <div className="back" >
      <h1><Link to="/" style={{padding:"1rem"}}><i className="fas fa-chevron-left"></i></Link></h1>
    </div>

     <div className="details">

     <div className="details-img">
     <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} style={{width:'300px',borderRadius:"10px"}} alt=""/>
     </div>
     <div className="details-extra">
     <MovieExtra movie={movie}/>
     </div>
    
    
    </div>
    
    </div>}
   
    
    <div className="summary">
    <div className="container">
    <h1 className="mb" >Summary</h1>
    <p className="mb" >{movie.overview}</p>
    <h1 className="mb" >Trailer</h1>
    {trailer!== undefined ?  <div className="trailer mb" >
      <iframe className="video" title="Trailer" width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>  
      
      
      </div>: <div className="hide"></div> }
     
      <h1 className="mb" >Cast</h1>
      <div className="cast">
      <div className="swiper-container" >
      <div className="swiper-wrapper">
      
        {cast.map(cast=>(
         <Person cast={cast} key={cast.cast_id} key={cast.credit_id}/>
        ))}

   
        
    </div>
    <div className="swiper-pagination"></div>
      </div>
      </div>
    </div>
    </div>
      
    </div>
  
    
  )
}



export default MovieDetail
