import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { auth } from "./store/reducers/auth";
import "./index.css";
import { App } from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({ auth });

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
