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
 
  // Get movies new Releases

  const getMovies = async(movie)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=1`);
    
    const data = await response.json();

    console.log(data);
    setMovies(data.results);
    setLoading(false);
  }



  // Get Movie genre
  const getMoviesGenre = async(id)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`);
    
    const data = await response.json();

    setMovies(data.results);
    setLoading(false);
  }


  // Search movie by name

  const searchMovie = async(name)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&query=${name}&page=1&include_adult=false`);
    
    const data = await response.json();

    // console.log(data);
    setMovies(data.results);
    setLoading(false);
  }
  // change Link li



 useEffect(()=>{
  getMovies('now_playing');
  

 },[]);


  return (
    <Router>
      <ScrollToTop>

      

    <div className="App">
    
   
      <Switch>
      
          <Route exact path='/' render={props=>(
           
            <Home {...props} loading={loading} movies={movies} getMoviesGenre={getMoviesGenre} getMovies={getMovies} searchMovie={searchMovie}/>
          )}/>
          <Route exact path='/movie/:id' render={props=>(
               
              <MovieDetail {...props} />
          
          )}/>

        </Switch>
    
    </div>
    </ScrollToTop>
    </Router>
  );
}


export default App;
