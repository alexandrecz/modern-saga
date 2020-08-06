import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestDeleteMovie } from './store/actions';
import { useHistory } from "react-router-dom";

import { Card, AppButtonAction } from './components';



const MovieDetail = ({ match }) => {

    const history = useHistory();
    const [movie, setMovie] = useState({}); 
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    
    const [divVisibility, setDivVisibility] = useState(false);
    const toggleVisibility = () => setDivVisibility(!divVisibility||true);       
    
    useEffect(() => {
        setTimeout(() => {
            toggleVisibility();
        }, 250);     
    })

    
    useEffect(() => {       
      getMovieFromState();
      // eslint-disable-next-line
    },[])   
  
    const getMovieFromState = () => {
      const data = movies.data.filter(mov => mov.id.toString() === match.params.id );
      setMovie(data[0]);       
    }

    const deleteMovie = () => {
      dispatch(requestDeleteMovie(movie));
      
      setTimeout(() => {
        history.goBack();      
      }, 300); 
      
    }
    

    return (
        <Card isVisible={divVisibility}>
          <h3>{movie.name}</h3>
          <AppButtonAction onClick={()=> deleteMovie()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"  
              fill="red"            
            >
              <path
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </AppButtonAction>
        </Card>
    )
}

export default MovieDetail;