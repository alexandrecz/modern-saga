import React, { useState, useEffect } from 'react';
import style from 'styled-components';


const Div = style.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: opacity .3s;     
    transition-delay: 150ms;     
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};    
`;

const Home = () => {

    const [divVisibility, setDivVisibility] = useState(false);
    const toggleVisibility = () => setDivVisibility(!divVisibility||true);       
    
    useEffect(() => {
        setTimeout(() => {
            toggleVisibility();
        }, 500);     
    })

    return (
        <Div isVisible={divVisibility}>
          <h1>Welcome to SAGA exercise</h1>
        </Div>
    )
}

export default Home;