import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ChatPage from "../../containers/ChatPageContainer";
import Auth from "../../containers/AuthPageContainer";

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/chat" component={ChatPage} />
            <Route path="/" exact component={Auth} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);
