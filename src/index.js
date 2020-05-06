import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import { auth } from "./store/reducers/auth";
import "./index.css";
import { App } from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({ auth });

const configureStore = () => {
    if (process.env.NODE_ENV === "production") {
        return createStore(rootReducer, applyMiddleware(thunkMiddleware));
    } else {
        const composeEnhancers =
            (typeof window !== "undefined" &&
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
            compose;
        return createStore(
            rootReducer,
            composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
        );
    }
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
