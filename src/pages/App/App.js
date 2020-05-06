import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../../containers/PrivateRoute";
import history from "../../shared/utils/history";

import ChatPage from "../../containers/ChatPageContainer";
import Auth from "../../containers/AuthPageContainer";

export const App = () => (
    <Router history={history}>
        <Switch>
            <PrivateRoute path="/chat" component={ChatPage} />
            <Route path="/" exact component={Auth} />
            <Redirect to="/" />
        </Switch>
    </Router>
);
