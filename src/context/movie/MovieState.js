import React,{useReducer,useEffect} from 'react';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import {
  GET_MOVIES,
  GET_MOVIES_GENRE,
  SEARCH_MOVIE,
  SEARCH_TV_SHOW,
  SEARCH_MOVIE_SHOW,
  CHANGE_CATEGORY,
  CHANGE_PAGINATION,
  CHANGE_CURRENT_INDEX,
  EMPTY_ARRAY_MOVIE,
  SET_MOVIE,
  SET_LOADING,
}from '../types'

const MovieState = (props)=>{
  const initialState={
    arrayMovie:[],
    movies:[],
    loading:false,
    status:'movie',
    currentIndex:1,
  }

  const [state,dispatch] = useReducer(MovieReducer,initialState);

  // Get movies new Releases

  const getMovies = async(movie)=>{
    setLoading(true);
    const response1 = await fetch(`https://api.themoviedb.org/3/${state.status}/${movie}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=1`);

    const data1 = await response1.json();

    const response2 = await fetch(`https://api.themoviedb.org/3/${state.status}/${movie}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=2`);

    const data2 = await response2.json();

    const response3 = await fetch(`https://api.themoviedb.org/3/${state.status}/${movie}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=3`);

    const data3 = await response3.json();
    const data = data1.results.concat(data2.results);

    dispatch({
      type:GET_MOVIES,
      payload:data.concat(data3.results),
    })

    dispatch({
        type:SET_MOVIE,
        payload:data1.results,
    });
   
    setLoading(false);
  }

  // Get Movie genre
  const getMoviesGenre = async(id)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/discover/${state.status}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`);
    
    const data = await response.json();

    dispatch({
      type:GET_MOVIES_GENRE,
      payload:data.results,
    });
  
    setLoading(false);
    
  }


   // Search movie by name

   const searchMovie = async(name)=>{
    setLoading(true);
    const response = await fetch(`https://api.themoviedb.org/3/search/${state.status}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&query=${name}&page=1&include_adult=false`);
    
    const data = await response.json();


    dispatch({
      type:SEARCH_MOVIE,
      payload:data.results,
    });

    setLoading(false);
  }

  // get tvshows


  const searchTvShows = async(name)=>{
    setLoading(true);
    const response1 = await fetch(`https://api.themoviedb.org/3/tv/${name}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=1`);
    const data1 = await response1.json();
    const response2 = await fetch(`https://api.themoviedb.org/3/tv/${name}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=2`);
    const data2 = await response2.json();
    const response3 = await fetch(`https://api.themoviedb.org/3/tv/${name}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=3`);
    const data3 = await response3.json();
    const data = data1.results.concat(data2.results);

    dispatch({
      type:SEARCH_TV_SHOW,
      payload:data.concat(data3.results),
    })

    dispatch({
        type:SET_MOVIE,
        payload:data1.results,
    });

    setLoading(false);
  }

  const searchMovieShow = async(name)=>{
    setLoading(true);
    const response1 = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=1`);
    const data1 = await response1.json();

  
    const response2 = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=2`);
    const data2 = await response2.json();

    const response3 = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=a1d0a6ecc93d4aa219817a9de0cd9c52&language=en-US&page=3`);
    const data3 = await response3.json();

    const data = data1.results.concat(data2.results);

    dispatch({
      type:SEARCH_MOVIE_SHOW,
      payload:data.concat(data3.results),
    })

    dispatch({
        type:SET_MOVIE,
        payload:data1.results,
    });

    setLoading(false);
  }

  // change movie or tv

  const changeCategory=()=>{
    
    if(state.status==='movie'){
  
      dispatch({
        type:CHANGE_CATEGORY,
        payload:'tv'
      })
     
    }else{
    
      dispatch({
        type:CHANGE_CATEGORY,
        payload:'movie'
      })
    }
    
  }

  // Change Pagination

  const changePagination = (array)=>{

    dispatch({
      type:CHANGE_PAGINATION,
      payload:array
    })
  }


  const changeCurrentIndex = (i)=>{
    // setCurrentIndex(i);
   dispatch({
     type:CHANGE_CURRENT_INDEX,
     payload:i
   })
  }
  // Array movie to 0

  const emptyArrayMovie =()=>{
    // setarrayMovie([]);
    dispatch({
      type:EMPTY_ARRAY_MOVIE,
      payload:[],
    })
  }


  // SET LOADING  

  const setLoading =(value)=>dispatch({
    type:SET_LOADING,
    payload:value,
  });

  useEffect(()=>{
    getMovies('popular');
    
  },[]);


// return provide

return <MovieContext.Provider
value={{
  arrayMovie:state.arrayMovie,
  movies:state.movies,
  loading:state.loading,
  status:state.status,
  currentIndex:state.currentIndex,
  setLoading,
  getMovies,
  getMoviesGenre,
  searchMovie,
  searchTvShows,
  searchMovieShow,
  changeCategory,
  changePagination,
  changeCurrentIndex,
  emptyArrayMovie
}}
>
{props.children}
</MovieContext.Provider>

}


export default MovieState;