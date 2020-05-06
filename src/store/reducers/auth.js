import {
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    RECIEVE_AUTH_FAIL,
    RECIEVE_AUTH_SUCCESS,
} from "../actions/actionTypes";

const token = localStorage.getItem("token");

const InitialState = {
    isAuth: !!token,
    user: {},
    token,
};

export const auth = (state = InitialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: action.user,
                token: action.token,
            };
        case RECIEVE_AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: action.user,
            };
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case RECIEVE_AUTH_FAIL:
            return {
                ...state,
                isAuth: false,
                user: {},
                token: "",
            };
        default:
            return state;
    }
};
