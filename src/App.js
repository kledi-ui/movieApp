import React,{useState,useEffect} from 'react';
import ScrollToTop from 'react-router-scroll-top';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail';

function App() {

 
  const [movies,setMovies]=useState([]);
  // const [movieDetail,setMovieDetail]=useState({});
  const [loading,setLoading]=useState(false);
  const [status,setStatus] =useState('movie');
 
  // Get movies new Releases

  const getMovies = async(movie)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/${status}/${movie}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=1`);

  
    
    const data = await response.json();


    setMovies(data.results);
    setLoading(false);
  }



  // Get Movie genre
  const getMoviesGenre = async(id)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/discover/${status}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`);
    
    const data = await response.json();

    setMovies(data.results);
    setLoading(false);
  }


  // Search movie by name

  const searchMovie = async(name)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/search/${status}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&query=${name}&page=1&include_adult=false`);
    
    const data = await response.json();


    setMovies(data.results);
    setLoading(false);
  }

  // get tvshows


  const searchTvShows = async(name)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/tv/${name}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=1`);
    const data = await response.json();

   
    setMovies(data.results);
    setLoading(false);
  }

  const searchMovieShow = async(name)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=1`);
    const data = await response.json();

    
    setMovies(data.results);
    setLoading(false);
  }

  // change movie or tv

  const changeCategory=()=>{
    
    if(status==='movie'){
      setStatus('tv');
     
    }else{
      setStatus('movie');
     
    }
    
  }



 useEffect(()=>{
  
  getMovies('popular');
  
// eslint-disable-next-line react/no-did-mount-set-state
 },[]);


  return (
    <Router>
      <ScrollToTop>

      

    <div className="App">
    
   
      <Switch>
      
          <Route exact path='/' render={props=>(
           
            <Home {...props} status={status} changeCategory={changeCategory} loading={loading} movies={movies} getMoviesGenre={getMoviesGenre} getMovies={getMovies} searchTvShows={searchTvShows} searchMovieShow={searchMovieShow} searchMovie={searchMovie}/>
          )}/>
          <Route exact path={`/${status}/:id`} render={props=>(
               
              <MovieDetail {...props} status={status}/>
          
          )}/>
          

        </Switch>
    
    </div>
    </ScrollToTop>
    </Router>
  );
}


export default App;
