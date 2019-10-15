import React from 'react';
import Search from '../components/Search';
import MovieList from './MovieList';

function Home(props) {
  return (
    <div className="home">
      <Search/>
      <MovieList loading={props.loading} movies={props.movies}/>
    </div>
  )
}

export default Home
