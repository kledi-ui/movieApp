import React from 'react';
import Search from '../components/Search';
import MovieList from './MovieList';
import Navbar from '../components/Navbar';
function Home(props) {

  return (
    <div>
      <Navbar getMovies={props.getMovies} getMoviesGenre={props.getMoviesGenre}/>
      <div className="home">
      <Search/>
      <MovieList loading={props.loading} movies={props.movies}/>
      </div>
      
    </div>
  )
}

export default Home
