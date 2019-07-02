import axios from "axios";
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

// axios request function
function axiosGetUser(login: string, password: string) {
  return axios({
    method: "get",
    url: `http://localhost:3001/userdata?id=1&login=${login}&password=${password}`
  });
}

// worker saga
export function* workerSaga(action: ReturnType<typeof axiosGetContentAction.request> ) {
  try {
    const response = yield call(axiosGetUser, action.payload.login, action.payload.password);
    console.log(
        `this is server response: 
          login: ${response.data[0].login}
          password: ${response.data[0].password}
          url: ${response.config.url}
         `);

    // dispatch a success action to the store user data
    yield put(axiosGetContentAction.success(response));
  }
  catch (error) {
    // dispatch a failure action to the store with the error
    yield put(axiosGetContentAction.failure(error));
  }
}
