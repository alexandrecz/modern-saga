import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestAddMovie } from './store/actions';
import { Form, Input, AppButton } from './components';


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
            
            <AppButton>Add Movie</AppButton>
        </Form>

    );
}

export default AddMovie;