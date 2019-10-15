import React,{useState,useEffect,Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar'
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

    console.log(data.results);
    setMovies(data.results);
    setLoading(false);
  }

  // Get Single Movie

  // change Link li



 useEffect(()=>{
  getMovies('now_playing');




 },[]);


  return (
    <Router>

    <div className="App">
      <Navbar getMovies={getMovies}/>
        <Switch>
          <Route exact path='/'component={props=>(
            <Home loading={loading} movies={movies}/>
          )}/>
          <Route exact path='/movie/:id' component={props=>(
           <Fragment>
              <MovieDetail {...props} />
           </Fragment>
          )}/>

        </Switch>
    
    </div>
    </Router>
  );
}


export default App;
