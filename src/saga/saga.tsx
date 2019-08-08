import { axiosGetUser } from "../reducers/rootReducer";
import {
  call,
  takeLatest,
  takeEvery,
  select,
  put,
} from "redux-saga/effects";
import { axiosGetContentAction } from "../actions/actions";
import {logOut, saveState} from "../helpers/localStorage";
import {store} from "../store/store";

// watcher saga
export function* watcherSaga() {
    yield takeLatest(axiosGetContentAction.request, workerSaga);
}

// worker saga
export function* workerSaga(action: ReturnType<typeof axiosGetContentAction.request>): Generator {
  try {
    const response = yield call(axiosGetUser, action.payload.login, action.payload.email, action.payload.password);

    console.log(response.data);
    // dispatch a success action to the store user data
    yield put(axiosGetContentAction.success(response));

    yield takeEvery("*", loggerSaga);

  } catch (err) {
    // dispatch a failure action to the store with the error
    console.log(err.response.data);
    yield put(axiosGetContentAction.failure(err.response.data));
  }
}

function* logOutSaga() {
  yield takeLatest(axiosGetContentAction.cancel, logOut)
}

function* loggerSaga(action: ReturnType<typeof axiosGetContentAction.success>) {
  const state = yield select();

  console.log('action', action);
  console.log('state after', state)
}
