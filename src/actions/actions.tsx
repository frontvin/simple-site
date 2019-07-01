import { LOGIN_FAILURE, LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER } from "../constants/constants";
import {createAction, createAsyncAction} from 'typesafe-actions';

// action creators
// export const loginUser = (login: string, password: string) => ({
//     type: LOGIN_USER,
//     payload: { login, password }
// });
//
// export const success = (login: string, password: string) => ({
//     type: LOGIN_SUCCESS,
//     payload: { login, password }
// });
//
// export const failure = (error: any) => ({
//     type: LOGIN_FAILURE,
//     error
// });
//
// export const logoutUser = () => ({
//     type: LOGOUT_USER,
// });

type User = { login: string; password: string };

export const axiosGetContentAction = createAsyncAction(
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
)<User, User[], Error>();

export const logOutAction = createAction(LOGOUT_USER);
