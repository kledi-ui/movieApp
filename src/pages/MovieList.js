import React,{useContext} from 'react'
import Movie from '../components/Movie';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination'
import MovieContext from '../context/movie/movieContext'

function MovieList() {

    const movieContext = useContext(MovieContext);
    const {movies,loading,status,changePagination,arrayMovie,changeCurrentIndex,currentIndex} = movieContext;

  if(loading===true){
    return <Spinner/>
  }else return (
    <div >
      <div className="grid">
     
    {movies.map(movie=>(
      <Movie status={status}title={movie.title} name={movie.name} release={movie.release_date} image={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id}/>
    ))}
    
      </div>
      {arrayMovie.length>25 ? <Pagination arrayMovie={arrayMovie} changePagination={changePagination} changeCurrentIndex={changeCurrentIndex} currentIndex={currentIndex}/>: null }
      
    </div>
  )
}

export default MovieList
