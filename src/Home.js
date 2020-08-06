import React, { useState, useEffect } from 'react';
import { Welcome } from './components';



const Home = () => {

    const [divVisibility, setDivVisibility] = useState(false);
    const toggleVisibility = () => setDivVisibility(!divVisibility||true);       
    
    useEffect(() => {
        setTimeout(() => {
            toggleVisibility();
        }, 250);     
    })

    return (
        <Welcome isVisible={divVisibility}>
          <h1>Welcome to SAGA exercise</h1>
        </Welcome>
    )
}

export default Home;