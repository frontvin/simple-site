import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga/saga';

import {rootReducer} from '../reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {loadState} from "../helpers/localStorage";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    sagaMiddleware
);

// create store
export const store = createStore(
    rootReducer,
    loadState(),
    composeWithDevTools(middleware)
);


// run saga
sagaMiddleware.run(rootSaga);