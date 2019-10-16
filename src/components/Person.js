import React from 'react'

function Person({cast}) {
  return (
    <div className="swiper-slide" style={{textAlign:"center"}} >
      <img className="poster" src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt=""/>
      <h4>{cast.name}</h4>
    </div>
  )
}

export default Person
