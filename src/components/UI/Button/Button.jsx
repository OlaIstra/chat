import React from "react";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(1),
    },
    "& svg": {
      fontSize: "30px",
    },
  },
}));

export const Button = ({ classCustom, ariaLabel, icon, label, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classnames(classes.root, classCustom)}>
      <IconButton aria-label={ariaLabel} {...rest}>
        {icon}
      </IconButton>
      <p>{label}</p>
    </div>
  );
};
