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

export default (state,action) =>{
switch(action.type){
  case GET_MOVIES:
  return{
    ...state,
    arrayMovie:action.payload
  }
  case SET_MOVIE:
  return{
    ...state,
    movies:action.payload
  }
  case SET_LOADING:
  return{
    ...state,
    loading:action.payload
  }
  case GET_MOVIES_GENRE:
  return{
    ...state,
    movies:action.payload
  }
  case SEARCH_MOVIE:
  return{
    ...state,
    movies:action.payload
  }
  case SEARCH_TV_SHOW:
  return{
    ...state,
    arrayMovie:action.payload,
  }

  case SEARCH_MOVIE_SHOW:
  return{
    ...state,
    arrayMovie:action.payload,
  }
  case CHANGE_CATEGORY:
  return{
    ...state,
    status:action.payload,
  }
  case CHANGE_PAGINATION:
  return{
    ...state,
    movies:action.payload,
  }
  case CHANGE_CURRENT_INDEX:
  return{
    ...state,
    currentIndex:action.payload,
  }
  case EMPTY_ARRAY_MOVIE:
  return{
    ...state,
    arrayMovie:action.payload,
  }
  default:
  return state;
}
}