import React from 'react';
import Search from '../components/Search';
import MovieList from './MovieList';
import Navbar from '../components/Navbar';
import NoMovies from '../components/NoMovies';
function Home(props) {

  return (
    <div>
      <Navbar getMovies={props.getMovies} getMoviesGenre={props.getMoviesGenre}/>
      <div className="home">
      <Search searchMovie={props.searchMovie}/>
      {props.movies.length===0 ? <NoMovies/> : <MovieList loading={props.loading} movies={props.movies}/> }
      
      </div>
      
    </div>
  )
}

export default Home
