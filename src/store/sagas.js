
// import { takeLatest, put, call, select, delay } from 'redux-saga/effects';

import { takeLatest, put, call, all  } from 'redux-saga/effects';



function* requestMoviesAsync() {
    try {

        //call api        
        const response = yield call(
            fetch,
            `http://localhost:8000/movies`
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



function* watchRequestMoviesAsync() {
    yield takeLatest('REQUEST_MOVIE_LIST', requestMoviesAsync)
}


export default function* rootSaga() {
    yield all([
        watchRequestMoviesAsync(),
    ])
};