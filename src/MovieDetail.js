import React from 'react';

import style from 'styled-components';
import './App.css';


const Div = style.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 20px auto auto auto;    
    padding: 2px;
    background-color: rgba(0,0,0,0.1); 
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);
    font-size: 1.4rem;
    font-weight: bold;    
    width: 80%;    
`;


const MovieDetail = () => {

    return (
        <Div>
          <h3>Aloha</h3>
        </Div>
    )
}

export default MovieDetail;