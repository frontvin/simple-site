import axios from "axios";
import {
  call,
  take,
  takeEvery,
  put,
} from "redux-saga/effects";
import { axiosGetContentAction } from "../actions/actions";

// watcher saga
export function* watcherSaga() {
  while (true) {
    yield take("LOGIN_USER");
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
    const response = yield call(axiosGetUser);
    console.log(response);
    // const content = JSON.stringify(response);

    // dispatch a success action to the store with new content
    // yield put(axiosGetContentAction.success(content));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(axiosGetContentAction.failure(error));
  }
}
