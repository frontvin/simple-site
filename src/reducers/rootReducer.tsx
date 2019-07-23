import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_USER } from "../constants/constants";
import axios from 'axios';
import decode from 'jwt-decode';

export type ServerResponse = { success: boolean, token: string }
export type DecodedToken = {
    id: string,
    login: string,
    email: string
}
export interface IState {
    success: boolean,
    token: string,
    decodedToken: DecodedToken
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
    try {
        const response = await axios.post('http://localhost:5000/login', { email, password });
        let  responseData : ServerResponse =  await response.data;
        console.log(responseData);

        return responseData;
    } catch(error) {
        console.log("error", error);
    }
};

export const loginReducer = (state = initialState, action: { type: string; payload: ServerResponse }) => {

    switch (action.type) {

        case LOGIN_SUCCESS: {

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
        case LOGIN_FAILURE: {
            return { ...state, error: "Failure!" };
        }
        case LOGOUT_USER:
            return {...state, success: false, token: "" };
        default:
            return state;
    }
};