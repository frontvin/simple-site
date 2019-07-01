import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../constants/constants";

const initialState = {
    userLogin: "",
    token: "",
    error: undefined
};

export const loginReducer = (state = initialState, action: any) => {

    const response = action.response;

    switch (action.type) {
        case LOGIN_SUCCESS: {
            return { ...state, response };
        }
        case LOGIN_FAILURE: {
            return { ...state, response };
        }
        default:
            return state;
    }
};