import { LOGIN_FAILURE, LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER } from "../constants/constants";
import { createAsyncAction, createAction } from 'typesafe-actions';


// action creators
export const loginUser = (login: string, password: string) => ({
    type: LOGIN_USER,
    payload: { login, password }
});


export const success = (login: string, password: string) => ({
    type: LOGIN_SUCCESS,
    payload: { login, password }
});

export const failure = (error: any) => ({
    type: LOGIN_FAILURE,
    error
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const axiosGetContentAction = createAsyncAction(
    LOGIN_USER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
)<undefined, string, Error>();
