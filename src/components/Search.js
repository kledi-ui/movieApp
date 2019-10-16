import React from 'react'
import icon from '../search.svg';
function Search(props) {



  const handeChange =(e)=>{
   
   
    if(e.target.value===''){
      console.log('enter title');
    } else{
      props.searchMovie(e.target.value);
    }
   
  }


  
  return (
    <div>
      
    <div className="search">
  
    <div className="box">
    <img src={icon} alt=""/>
    <input placeholder="Search movie ..." type="text" onChange={handeChange}/>
    </div>
    
    </div>
     
    </div>
  )
}

export default Search
