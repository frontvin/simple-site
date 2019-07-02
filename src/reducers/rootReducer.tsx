import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../constants/constants";

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
            return { ...state, token: "accepted_token" };
        }
        case LOGIN_FAILURE: {
            return { ...state, error: "Failure!" };
        }
        default:
            return state;
    }
};