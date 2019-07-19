import { axiosGetUser } from "../reducers/rootReducer";
import {
  call,
  takeEvery,
  put,
} from "redux-saga/effects";
import { axiosGetContentAction } from "../actions/actions";

// watcher saga
export function* watcherSaga() {
    yield takeEvery(axiosGetContentAction.request, workerSaga);
}

// worker saga
export function* workerSaga(action: ReturnType<typeof axiosGetContentAction.request> ) {
  try {
    const response = yield call(axiosGetUser, action.payload.login, action.payload.email, action.payload.password);

    // dispatch a success action to the store user data
    yield put(axiosGetContentAction.success(response));
  }
  catch (error) {
    // dispatch a failure action to the store with the error
    yield put(axiosGetContentAction.failure(error));
  }
}
