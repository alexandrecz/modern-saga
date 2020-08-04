import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { movies } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = {
    movies, 
};

const rootReducer = combineReducers(reducers);

const configureStore = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ),    
);


sagaMiddleware.run(rootSaga);

export default configureStore;