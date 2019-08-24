import {axiosGetUser} from "../reducers/rootReducer";
import {all, call, put, select, takeLatest,} from "redux-saga/effects";
import {axiosGetContentAction, logoutUser, saveToLocalStorage} from "../actions/actions";
import {logOut, saveState} from "../helpers/localStorage";
import {getType} from "typesafe-actions";

// watcher sagas
export function* watcherLoginSaga() {
    yield takeLatest(axiosGetContentAction.request, workerLoginSaga);
}

export function* watcherStorage() {
    yield takeLatest(saveToLocalStorage.request, workerStorageSaga);
}

export function* workerStorageSaga(action: ReturnType<typeof saveToLocalStorage.request>): Generator{

    const state = yield select();
    const savedData = yield call(saveState, state);
    yield put(saveToLocalStorage.success())
}

// worker saga
export function* workerLoginSaga(action: ReturnType<typeof axiosGetContentAction.request>): Generator {
  try {
    const response = yield call(axiosGetUser, action.payload.login, action.payload.email, action.payload.password);

    console.log(response.data);
    // dispatch a success action to the store user data
    yield put(axiosGetContentAction.success(response));
    // yield call(saveToLocalStorage.success, watcherStorage);
    yield put(saveToLocalStorage.request());
  } catch (err) {
    // dispatch a failure action to the store with the error
    console.log(err.response.data);
    yield put(axiosGetContentAction.failure(err.response.data));
  }
}

export function* workerLogOutSaga(action: ReturnType<typeof logoutUser>): Generator {
    yield call(logOut);
}

export function* rootSaga() {
    yield all([
        takeLatest(getType(axiosGetContentAction.request), workerLoginSaga),
        takeLatest(getType(saveToLocalStorage.request), workerStorageSaga),
        takeLatest(getType(logoutUser), workerLogOutSaga)
    ])
};