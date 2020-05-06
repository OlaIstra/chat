import axios from "axios";
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

        return axios({
            method: "post",
            url: "http://localhost:8010/v1/signup",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: {
                username,
                password,
            },
        })
            .then((res) => {
                if (res.data.success) {
                    return res.data;
                }

                throw new Error(res.data.error);
            })
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

        return axios({
            method: "post",
            url: "http://localhost:8010/v1/login",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: {
                username,
                password,
            },
        })
            .then((res) => {
                if (!res.data.token) {
                    throw new Error("Token was not provided");
                }

                localStorage.setItem("token", res.data.token);
                dispatch({
                    type: LOGIN_SUCCESS,
                    user: res.data.user,
                    token: res.data.token,
                });
            })
            .catch((err) =>
                dispatch({
                    type: LOGIN_FAIL,
                })
            );
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
        return axios({
            url: "http://localhost:8010/v1/users/me",
            headers: {
                Authorization: `Barear ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.success) {
                    return res.data;
                }
                throw new Error(res.message);
            })
            .then((res) =>
                dispatch({
                    type: RECIEVE_AUTH_SUCCESS,
                    user: res.data.user,
                    token: res.data.token,
                })
            )
            .catch((err) =>
                dispatch({
                    type: RECIEVE_AUTH_FAIL,
                })
            );
    };
};
