import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../saga/saga';

import { loginReducer } from '../reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    sagaMiddleware
);

// create store
export const store = createStore(loginReducer, composeWithDevTools(middleware));

// run saga
sagaMiddleware.run(watcherSaga);