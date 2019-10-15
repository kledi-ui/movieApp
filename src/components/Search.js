import React from 'react'
import icon from '../search.svg';
function Search() {
  return (
    <div>
      
    <div className="search">
  
    <div className="box">
    <img src={icon} alt=""/>
    <input placeholder="Search movie ..." type="text"/>
    </div>
    
    </div>
     
    </div>
  )
}

export default Search
