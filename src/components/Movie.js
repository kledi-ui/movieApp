import React from 'react'
import {Link} from 'react-router-dom';
function Movie(props) {
 
  return (
    <div>
      <Link to={`/movie/${props.id}`}>
      <div className="movie">
      <img src={`https://image.tmdb.org/t/p/original${props.image}`} alt=""/>
      <h1>{props.title}</h1>
      <h2>{props.release}</h2>
      <div className="rating">
      <i className="fas fa-star"></i>{props.rating}
      </div>
      </div>
      </Link>
      
    </div>
  )
}

export default Movie
