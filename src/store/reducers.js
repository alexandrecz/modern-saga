

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
        default:
            return state;
    }

}