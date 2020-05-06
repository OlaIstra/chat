import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "fixed",
    width: `calc(100% - 320px)`,
    background: "#3c78a2",
  },
}));

export const AppBar = ({ title, children }) => {
  const classes = useStyles();

  return (
    <MUIAppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4" color="inherit" noWrap>
          {title}
          {children}
        </Typography>
      </Toolbar>
    </MUIAppBar>
  );
};
