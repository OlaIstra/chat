import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { ChatPage } from "../ChatPage/ChatPage";
import Auth from "../Auth/Auth";

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/chat" component={ChatPage} />
            <Route path="/" exact component={Auth} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);
