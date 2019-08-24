import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SAVE_TO_STORAGE_REQUEST,
    SAVE_TO_STORAGE_SUCCESS,
    SAVE_TO_STORAGE_ERROR,
    LOGOUT_USER } from "../constants/constants";
import {createAsyncAction, createStandardAction} from 'typesafe-actions';

export type User = { login: string; email: string, password: string };
export type ServerResponse = { success: boolean, token: string };
export type ErrorResponse = { err: string };

export const axiosGetContentAction = createAsyncAction(
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
)<User, ServerResponse, ErrorResponse>();

export const saveToLocalStorage = createAsyncAction(
    SAVE_TO_STORAGE_REQUEST,
    SAVE_TO_STORAGE_SUCCESS,
    SAVE_TO_STORAGE_ERROR
)<undefined, undefined, Error>();

export const logoutUser = createStandardAction(
    LOGOUT_USER
)();