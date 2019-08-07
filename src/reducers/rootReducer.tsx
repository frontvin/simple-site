import axios from 'axios';
import decode from 'jwt-decode';
import {ActionType, getType} from "typesafe-actions";
import { ServerResponse } from "../actions/actions";

import * as actions from '../actions/actions';
export type RootAction = ActionType<typeof actions>;

export type DecodedToken = {
    id: string,
    login: string,
    email: string
}
export interface IState {
    success: boolean,
    token: string,
    decodedToken: DecodedToken,
    error: string,
}

const initialState: IState = {
    success: false,
    token: "",
    decodedToken: {
        id: "",
        login: "",
        email: ""
    },
    error: "",
};

// axios request function
export const axiosGetUser = async (login: string, email: string, password: string)  => {

        const response = await axios.post('http://localhost:5000/login', { email, password });

        let  responseData : ServerResponse =  await response.data;

        return responseData;
};

export const loginReducer = (state = initialState, action: RootAction) => {

    switch (action.type) {

        case getType(actions.axiosGetContentAction.success):{
            const dec: DecodedToken = decode(action.payload.token);
            const { id, login, email } = dec;

            return { ...state,
                success: action.payload.success,
                token: action.payload.token,
                decodedToken: {
                    id: id,
                    login: login,
                    email: email
                }
            }
        }
        case getType(actions.axiosGetContentAction.failure): {
            // console.log(action.type);
            return { ...state, error:  action.payload.err};
        }
        default:
            return state;
    }
};