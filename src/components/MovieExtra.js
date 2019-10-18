import React from 'react'
import Stars from './Stars';
function MovieExtra({movie,status}) {




  return (
    <div>
      {status==='movie' ? <h1 className="mb title">{movie.original_title}</h1> :
    <h1 className="mb title">{movie.original_name}</h1>}
    
     <h2 className="mb">Rating: {movie.vote_average} / 10</h2>
     <Stars vote={movie.vote_average}/>
     <h3 className="mb">{movie.tagline}</h3>
     <div className="genres mb">
     {movie.genres ? movie.genres.map((name,index)=>(
       <h4 key={index}>{name.name}</h4>
       )) : null}

    </div>
    <h4 className="mb">{movie.release_date} / {movie.runtime} min</h4>
    <h4>Status : {movie.status}</h4>
      
    </div>
  )
}

export default MovieExtra
