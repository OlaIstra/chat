import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  messageWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: "flex-end",
  },
  message: {
    maxWidth: "70%",
    minWidth: "10%",
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: "#3c78a26e",
  },
}));

export default function Message(props) {
  const classes = useStyles();

  return (
    <div
      key={props.index}
      className={[
        classes.messageWrapper,
        props.isMessageFromMe ? classes.messageWrappperFromMe : "",
      ].join(" ")}
    >
      {!props.isMessageFromMe && props.userAvatar}
      <Paper
        className={[
          classes.message,
          props.isMessageFromMe ? classes.messageFromMe : "",
        ].join(" ")}
      >
        <Typography variant="caption">{props.message.sender}</Typography>
        <Typography variant="body1">{props.message.content}</Typography>
      </Paper>
      {props.isMessageFromMe && props.userAvatar}
    </div>
  );
}
