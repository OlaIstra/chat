import { callApi } from "../../shared/utils/call-api";
import {
    SIGNUP_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT_START,
    LOGIN_FAIL,
    RECIEVE_AUTH_SUCCESS,
    RECIEVE_AUTH_FAIL,
} from "./actionTypes";

export const signup = (username, password) => {
    return (dispatch) => {
        dispatch({
            type: SIGNUP_START,
        });

        return callApi(
            "signup",
            undefined,
            { method: "post" },
            {
                username,
                password,
            }
        )
            .then((res) => {
                if (res.token) {
                    throw new Error("Token was not provided");
                }

                localStorage.setItem("token", res.token);

                dispatch({
                    type: SIGNUP_SUCCESS,
                    user: res.user,
                    token: res.token,
                });
            })
            .catch((err) =>
                dispatch({
                    type: SIGNUP_FAIL,
                })
            );
    };
};

export const login = (username, password) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_START,
        });

        return callApi(
            "login",
            undefined,
            { method: "post" },
            {
                username,
                password,
            }
        )
            .then((res) => {
                console.log(res);
                if (!res.token) {
                    throw new Error("Token was not provided");
                }

                localStorage.setItem("token", res.token);
                dispatch({
                    type: LOGIN_SUCCESS,
                    user: res.user,
                    token: res.token,
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: LOGIN_FAIL,
                });
            });
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT_START,
        });
    };
};

export const recieveAuth = () => {
    console.log("recieveAut");
    return (dispatch, getState) => {
        const { token } = getState().auth;
        if (!token) {
            dispatch({
                type: RECIEVE_AUTH_FAIL,
            });
        }
        return callApi("/users/me", token)
            .then((res) =>
                dispatch({
                    type: RECIEVE_AUTH_SUCCESS,
                    user: res.user,
                    token: res.token,
                })
            )
            .catch((err) =>
                dispatch({
                    type: RECIEVE_AUTH_FAIL,
                })
            );
    };
};
