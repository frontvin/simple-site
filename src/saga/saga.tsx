import axios from "axios";
import {
  call,
  takeEvery,
  put,
} from "redux-saga/effects";
import { axiosGetContentAction, User } from "../actions/actions";

// watcher saga
export function* watcherSaga() {
  while (true) {
    yield takeEvery('LOGIN_REQUEST', workerSaga);
  }
}

// axios request function
function axiosGetUser() {
  return axios({
    method: "get",
    url: "https://localhost:3001/userdata"
  });
}

// worker saga
export function* workerSaga() {
  try {
    const response: User[] = yield call(axiosGetUser);

    // dispatch a success action to the store with new content
    yield put(axiosGetContentAction.success(response));
  }
  catch (error) {
    // dispatch a failure action to the store with the error
    yield put(axiosGetContentAction.failure(error));
  }
}
