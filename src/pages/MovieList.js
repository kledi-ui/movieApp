import React from 'react'
import Movie from '../components/Movie';
import Spinner from '../components/Spinner';
function MovieList({movies,loading}) {
  if(loading===true){
    return <Spinner/>
  }else return (
    <div>
      <div className="grid">
     
    {movies.map(movie=>(
      <Movie title={movie.title} release={movie.release_date} image={movie.poster_path} rating={movie.vote_average} key={movie.id} id={movie.id}/>
    ))}
    
      </div>

    </div>
  )
}

export default MovieList
