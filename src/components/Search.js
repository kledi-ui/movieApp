import React,{useState,useEffect,useContext} from 'react'
import icon from '../search.svg';
import MovieContext from '../context/movie/movieContext';


function Search() {



  const movieContext = useContext(MovieContext);


  const[btnname,setBtnName]=useState('');
  useEffect(()=>{
 
    if(movieContext.status==='movie'){
      setBtnName('TV-SHOWS');
    }else{
      setBtnName('SHOW MOVIES');
    }
  },[])

  const handeClick =(e)=>{
    movieContext.changeCategory();
    
    if(movieContext.status==='movie'){
      movieContext.searchTvShows('popular');
      setBtnName('SHOW MOVIES');
      
    }else if(movieContext.status==='tv'){
      movieContext.searchMovieShow('popular');
      setBtnName('TV-SHOWS');
    }
   

    movieContext.changeCurrentIndex(1);
   
    e.preventDefault();
  }

  const handeChange =(e)=>{
   
   
    if(e.target.value===''){
      console.log('enter title');
    } else{
      movieContext.searchMovie(e.target.value);
    }
    movieContext.emptyArrayMovie();
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
