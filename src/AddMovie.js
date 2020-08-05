import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestAddMovie } from './store/actions';
import style from 'styled-components';

const Form = style.form`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 18vh;
    width: 80%;  
    margin: auto;
    border-bottom: 2px solid slategrey; 
    transition: opacity .3s;     
    transition-delay: 150ms;     
    opacity: ${({ isVisible }) => isVisible ? 1 : 0}; 
`;

const Input = style.input`
    font-size: 16px;
    padding: 14px;
    margin-right: 30px;
    border: none;
    border-bottom: 2px solid #ddd;    
    width: 350px;
    outline: none;
`;


const AddMovie = () => {

    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    
    const [formVisibility, setFormVisibility] = useState(false);
    const toggleVisibility = () => setFormVisibility(!formVisibility||true);       
    
    useEffect(() => {
        setTimeout(() => {
            toggleVisibility();
        }, 250);     
    })
    
    
    const [name, setName] = useState('');   
        
    const updateName = e => {
        setName(e.target.value);
    };  

    const submitMovie = e => {
        e.preventDefault();
        const isDuplicateMovie = movies.data.some(movie => movie.name === name);
        
        if(!isDuplicateMovie) {
            const newMovie = {name: name, id: new Date().getTime(),};              
            dispatch(requestAddMovie(newMovie));
                        
            setName('');           
        }       
    };
    

    return (
        <Form onSubmit={submitMovie} isVisible={formVisibility}>
            <Input 
                type="text"
                autocomplete="off"
                placeholder="Type movie name here"
                name="name"
                value={name} 
                onChange={updateName}/>           
            
            <button className="App-button">Add Movie</button>
        </Form>

    );
}

export default AddMovie;