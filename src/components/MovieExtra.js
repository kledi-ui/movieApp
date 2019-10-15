import React from 'react'

function MovieExtra({movie}) {

 
  return (
    <div>
      <h1 className="mb">{movie.title}</h1>
     <h2 className="mb">Rating: {movie.vote_average}</h2>
     <h3 className="mb">{movie.tagline}</h3>
     <div className="genres mb">
     {movie.genres ? movie.genres.map((name,index)=>(
       <h4 key={index}>{name.name}</h4>
       )) : null}

    </div>
    <h4>Status : {movie.status}</h4>
      
    </div>
  )
}

export default MovieExtra
