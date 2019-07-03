import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_USER} from "../constants/constants";

export interface IState {
    isLogin: boolean,
    token: string,
    error: string
}

const initialState: IState = {
    isLogin: false,
    token: "",
    error: ""
};

export const loginReducer = (state = initialState, action: { type: string; }) => {

    switch (action.type) {

        case LOGIN_SUCCESS: {
            return { ...state, isLogin: true, token: "accepted_token" };
        }
        case LOGIN_FAILURE: {
            return { ...state, error: "Failure!" };
        }
        case LOGOUT_USER:
            return {...state, isLogin: false, token: ""};
        default:
            return state;
    }
};