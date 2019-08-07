import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER } from "../constants/constants";
import { createAsyncAction } from 'typesafe-actions';

export type User = { login: string; email: string, password: string };
export type ServerResponse = { success: boolean, token: string };
export type ErrorResponse ={ err: string };

export const axiosGetContentAction = createAsyncAction(
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_USER
)<User, ServerResponse, ErrorResponse, string>();