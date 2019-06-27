import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import Saga from '../saga/saga';

import rootReducer from '../reducers/rootReducer';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    sagaMiddleware
);

// create store
export const store = createStore(rootReducer, middleware);

// run saga
sagaMiddleware.run(Saga);

