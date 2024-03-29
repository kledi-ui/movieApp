import React from 'react'

function Person({cast}) {
  if(cast.profile_path){
    return (
<div className="swiper-slide" >
      <div className="poster-div">
      <img className="poster"src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt=""/>
      <h4 className="poster-name">{cast.name}</h4>
      </div>
      
    </div>
    )
  }
  else return (
    <div className="hide">

      </div>
  )
}

export default Person
