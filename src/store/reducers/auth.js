import {
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
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
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
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
