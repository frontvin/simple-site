import { axiosGetUser } from "../reducers/rootReducer";
import {
  call,
  takeLatest,
  put,
} from "redux-saga/effects";
import { axiosGetContentAction } from "../actions/actions";

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
  } catch (err) {
    // dispatch a failure action to the store with the error
    console.log(err.response.data);
    yield put(axiosGetContentAction.failure(err.response.data));
  }
}
