
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