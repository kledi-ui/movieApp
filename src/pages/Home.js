import React from 'react';
import Search from '../components/Search';
import MovieList from './MovieList';
import Navbar from '../components/Navbar';
import NoMovies from '../components/NoMovies';

function Home(props) {

  return (
    <div>
      <Navbar  emptyArrayMovie={props.emptyArrayMovie} changeCurrentIndex={props.changeCurrentIndex} status={props.status} getMovies={props.getMovies} getMoviesGenre={props.getMoviesGenre}/>
      <div className="home">
      <Search status={props.status} searchTvShows={props.searchTvShows} searchMovieShow={props.searchMovieShow} changeCategory={props.changeCategory} searchMovie={props.searchMovie} changeCurrentIndex={props.changeCurrentIndex}/>
      {props.movies.length===0 ? <NoMovies/> : <MovieList status={props.status} loading={props.loading} movies={props.movies} changePagination={props.changePagination} arrayMovie={props.arrayMovie} changeCurrentIndex={props.changeCurrentIndex} currentIndex={props.currentIndex}/> }
     
      
      </div>
      
    </div>
  )
}

export default Home
