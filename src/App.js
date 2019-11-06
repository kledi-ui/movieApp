import React from 'react';
import ScrollToTop from 'react-router-scroll-top';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail';
import MovieState from  './context/movie/MovieState';




function App (){
  
  return (
    <MovieState>
    <Router>
      <ScrollToTop>

    <div className="App">
    
      <Switch>
          <Route exact path='/' render={props=>(
            <Home/>
          )}/>
          <Route exact path={`/movie/:id`} render={props=>(
              <MovieDetail {...props} />
          )}/>
           <Route exact path={`/tv/:id`} render={props=>(
              <MovieDetail {...props} />
          )}/>
           
  
        </Switch>
    
    </div>
    </ScrollToTop>
    </Router>
    </MovieState>
  );
}




export default App;
