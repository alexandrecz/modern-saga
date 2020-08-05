
export const requestMovieList = () => ({
    type: 'REQUEST_MOVIE_LIST',     
});

export const successMovieList = movies => ({
    type: 'SUCCESS_MOVIE_LIST',     
    payload: { movies },
});

export const failureMovieList = () => ({
    type: 'FAILURE_MOVIE_LIST',     
});


export const requestAddMovie = movie => ({
    type: 'REQUEST_ADD_MOVIE',
    payload: { movie },              
});

export const successAddMovie = () => ({
    type: 'SUCCESS_ADD_MOVIE',     
});

export const failureAddMovie = () => ({
    type: 'FAILURE_ADD_MOVIE',     
});

export const requestDeleteMovie = movie => ({
    type: 'REQUEST_DELETE_MOVIE',
    payload: { movie },              
});

export const successDeleteMovie = () => ({
    type: 'SUCCESS_DELETE_MOVIE',     
});

export const failureDeleteMovie = () => ({
    type: 'FAILURE_DELETE_MOVIE',     
});