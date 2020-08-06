import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestMovieList } from './store/actions';
import { useHistory } from "react-router-dom";

import AddMovie from './AddMovie';
import Movie from './Movie';

import { List, ListItem } from './components';



const MovieList = ({ movies = {}}) => {
    
    movies = useSelector(state => state.movies);
    
    const dispatch = useDispatch();
    
    const [listVisibility, setListVisibility] = useState(false);
    const toggleVisibility = () => setListVisibility(!listVisibility||true);       
    
    useEffect(() => {
        //just a little w.a. to get the proper stagger effect after render
        setTimeout(() => {
            toggleVisibility();
        }, 500);
    })

    useEffect(() => {
        dispatch(requestMovieList());
      // eslint-disable-next-line        
    },[])
    
    let history = useHistory();

    const redirectTo = id => {
      history.push(`/movies/${id}`);      
    }
    
  return (    
    <>
      <AddMovie/>
      <List> 
        {movies.data.map((movie, index) => (
         <ListItem key={movie.id} isVisible={listVisibility} delay={index*150} onClick={()=> redirectTo(movie.id)} >
            <Movie movie={movie} />
         </ListItem>           
       ))}
     </List>        
    </>
  );
}

export default MovieList;