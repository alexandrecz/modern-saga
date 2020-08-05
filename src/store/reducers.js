

const initialState = { loading: false, data: [] };


export const movies = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case 'REQUEST_MOVIE_LIST':
            return {
                ...state,
                loading: true 
            }
        case 'SUCCESS_MOVIE_LIST':
            const { movies } = payload;    
            return {
                ...state,
                loading: false,
                data: movies,
            };        
        case 'FAILURE_MOVIE_LIST':
            return {
                ...state,
                loading: false,              
            };
        case 'REQUEST_ADD_MOVIE':          
            const { movie } = payload;      
            return {
                ...state,                      
                data: state.data.concat(movie),
            };  
        case 'SUCCESS_ADD_MOVIE':
            return {
                ...state,
                loading: false,              
            };       
        case 'FAILURE_ADD_MOVIE':
            return {
                ...state,
                loading: false,              
            };
        case 'REQUEST_DELETE_MOVIE':          
         const { movie: movieToRemove } = payload;     
            return {
                ...state,                      
                data: state.data.filter(movie => movie.id !== movieToRemove.id),
            };  
        case 'SUCCESS_DELETE_MOVIE':
            return {
                ...state,
                loading: false,              
            };       
        case 'FAILURE_DELETE_MOVIE':
            return {
                ...state,
                loading: false,              
            }; 
        default:
            return state;
    }

}