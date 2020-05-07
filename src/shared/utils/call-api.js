import axios from "axios";

export const callApi = (endpoint, token, options, payload) => {
    const authHeaders = token
        ? {
              Authorization: `Bearer ${token}`,
          }
        : {};

    return axios(`http://localhost:8010/v1/${endpoint}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...authHeaders,
        },
        data: payload,
        ...options,
    }).then((res) => {
        console.log(res);
        if (res.data.success) {
            return res.data;
        }

        throw new Error(res.data.message);
    });
};
