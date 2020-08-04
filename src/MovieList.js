import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestMovieList } from './store/actions';

import Movie from './Movie';
import style from 'styled-components';
import './App.css';


const List = style.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
`;
const ListItem = style.li`
    list-style: none;
    display: flex;
    justify-content: space-around;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);
    font-size: 1.4rem;
    font-weight: bold;    
    padding:2px;
    margin-bottom: 20px;
    width: 80%;    
    transition: opacity .3s;     
    transition-delay: ${({delay}) => `${delay}ms`};     
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};
`;

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
                
    },[])
    
    
  return (
    <>
      <div></div>
      <List> 
        {movies.data.map((movie, index) => (
           <ListItem key={movie.id} isVisible={listVisibility} delay={index*150}>
              <Movie movie={movie} />              
          </ListItem>
        ))}
     </List>
    </>
    
  );
}

export default MovieList;