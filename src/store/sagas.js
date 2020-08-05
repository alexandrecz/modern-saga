
// import { takeLatest, put, call, select, delay } from 'redux-saga/effects';
import { takeLatest, put, call, all  } from 'redux-saga/effects';


function* requestMoviesAsync() {
    
    try {

        const { REACT_APP_BASE_URL } = process.env;
        
        const response = yield call(
            fetch,
            `${REACT_APP_BASE_URL}movies`
        );
        
        const movies = yield call([response, response.json]);     
        
        yield put({ type: 'SUCCESS_MOVIE_LIST', payload: { movies} });

    } catch(error) {
        console.log(
            "%cERROR",
            "text-transform: uppercase; padding: 10px; background: red; color: white;",
            `requestMoviesAsync: ${error}`
        );

        yield put({ type: 'FAILURE_MOVIE_LIST' });
    }
}


function* requestAddMovieAsync({ payload }) {
    
    try {
        
        const { movie } = payload;
                
        const body = JSON.stringify(movie);       

        const { REACT_APP_BASE_URL } = process.env;
        
        const response = yield call(
            fetch,
            `${REACT_APP_BASE_URL}movies`,{
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'post',
                body,
            }
        );  

        // eslint-disable-next-line
        const newMovie = yield call([response, response.json]); 
        
        yield put({ type: 'SUCCESS_ADD_MOVIE' });
        

    } catch(error) {
        console.log(
            "%cERROR",
            "text-transform: uppercase; padding: 10px; background: red; color: white;",
            `requestAddMovieAsync: ${error}`
        );

        yield put({ type: 'FAILURE_ADD_MOVIE' });
    }
}

function* requestDeleteMovieAsync({ payload }) {
    
    try {
        
        const { movie } = payload;
               
        const { REACT_APP_BASE_URL } = process.env;        
        
        const response = yield call(
            fetch,
            `${REACT_APP_BASE_URL}movies/${movie.id}`,{                
                method: 'delete',                
            }
        );  

        // eslint-disable-next-line
        const removedMovie = yield call([response, response.json]); 
        
        yield put({ type: 'SUCCESS_DELETE_MOVIE' });
        

    } catch(error) {
        console.log(
            "%cERROR",
            "text-transform: uppercase; padding: 10px; background: red; color: white;",
            `requestDeleteMovieAsync: ${error}`
        );

        yield put({ type: 'FAILURE_DELETE_MOVIE' });
    }
}

function* watchRequestMoviesAsync() {
    yield takeLatest('REQUEST_MOVIE_LIST', requestMoviesAsync)
}

function* watchRequestAddMovieAsync() {
    yield takeLatest('REQUEST_ADD_MOVIE', requestAddMovieAsync)
}

function* watchRequestDeleteMovieAsync() {
    yield takeLatest('REQUEST_DELETE_MOVIE', requestDeleteMovieAsync)
}


export default function* rootSaga() {
    yield all([
        watchRequestMoviesAsync(),
        watchRequestAddMovieAsync(),
        watchRequestDeleteMovieAsync(),        
    ])
};