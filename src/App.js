import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Conversation from "./components/Conversation/Conversation";
import Drawer from "./components/Drawer/Drawer";
import AppBar from "./components/AppBar/AppBar";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.default,
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar />
            <Drawer />
            <Conversation />
        </div>
    );
}
