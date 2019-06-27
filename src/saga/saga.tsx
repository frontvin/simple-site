import { call, put, takeLatest } from 'redux-saga/effects';
import {all} from "q";

function* Saga() {
    yield all([]);
};

export default Saga