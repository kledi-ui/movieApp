import React,{useContext} from 'react';
import Search from '../components/Search';
import MovieList from './MovieList';
import Navbar from '../components/Navbar';
import NoMovies from '../components/NoMovies';
import MovieContext from '../context/movie/movieContext';

function Home() {
  const movieContext = useContext(MovieContext);
 
  return (
    <div>
      <Navbar/>
      <div className="home">
      <Search/>
      {movieContext.movies.length===0 ? <NoMovies/> : <MovieList/> }
     
      
      </div>
      
    </div>
  )
}

export default Home
