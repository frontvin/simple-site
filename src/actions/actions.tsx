import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER } from "../constants/constants";
import { createAsyncAction } from 'typesafe-actions';
import {IState} from "../reducers/rootReducer";

export type User = { login: string; email: string, password: string };

export const axiosGetContentAction = createAsyncAction(
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_USER
)<User, IState, Error>();