import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from '../saga/saga';

import { loginReducer } from '../reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {loadState, saveState} from "../helpers/localStorage";

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    sagaMiddleware
);

const persistedState = loadState();
// create store
export const store = createStore(
    loginReducer,
    persistedState,
    composeWithDevTools(middleware)
);

store.subscribe(() => {
    saveState({
        success: store.getState().success,
        token: store.getState().token,
        decodedToken: store.getState().decodedToken,
        error: store.getState().error
    });
});

// run saga
sagaMiddleware.run(watcherSaga);