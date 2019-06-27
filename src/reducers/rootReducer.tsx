import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../constants/constants";
import { routerReducer } from 'react-router-redux';
import { combineReducers } from "redux";

const initialState = {
    // userLogin,
    // token,
    // error
};

export const loginReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case LOGIN_SUCCESS: {
            // return { ...state, token: payload };
        }
        case LOGIN_FAILURE: {
            // return { ...state, error: payload };
        }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    login: loginReducer,
    router: routerReducer
});

export default rootReducer;