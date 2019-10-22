import React,{useState,useEffect} from 'react'
import icon from '../search.svg';
function Search(props) {

  
  const[btnname,setBtnName]=useState('');
  useEffect(()=>{
    if(props.status==='movie'){
      setBtnName('TV-SHOWS');
    }else{
      setBtnName('SHOW MOVIES');
    }
  },[])

  const handeClick =(e)=>{
    props.changeCategory();
    
    if(props.status==='movie'){
      props.searchTvShows('popular');
      setBtnName('SHOW MOVIES');
      
    }else if(props.status==='tv'){
      props.searchMovieShow('popular');
      setBtnName('TV-SHOWS');
    }
   

    props.changeCurrentIndex(1);
   
    e.preventDefault();
  }

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
    <button className="btn-change" onClick={handeClick}><i className="fas fa-play"></i> {btnname}</button>
    
    </div>
     
    </div>
  )
}

export default Search
