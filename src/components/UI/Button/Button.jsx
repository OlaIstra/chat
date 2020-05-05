import React from "react";
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

export default function Button(props) {
  const classes = useStyles();

  return (
    <div className={[classes.root, props.classCustom].join(" ")}>
      <IconButton aria-label={props.ariaLabel}>{props.icon}</IconButton>
      <p>{props.label}</p>
    </div>
  );
}
