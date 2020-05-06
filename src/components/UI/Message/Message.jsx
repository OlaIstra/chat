import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  messageWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: `${theme.spacing()}px ${theme.spacing(3)}px`,
  },
  messageWrappperFromMe: {
    justifyContent: "flex-end",
  },
  message: {
    maxWidth: "70%",
    minWidth: "10%",
    padding: theme.spacing(),
    marginLeft: theme.spacing(2),
  },
  messageFromMe: {
    marginRight: theme.spacing(2),
    backgroundColor: "#3c78a26e",
  },
}));

export const Message = ({ index, isMessageFromMe, userAvatar, message }) => {
  const classes = useStyles();

  return (
    <div
      key={index}
      className={classnames(
        classes.messageWrapper,
        isMessageFromMe && classes.messageWrappperFromMe
      )}
    >
      {!isMessageFromMe && userAvatar}
      <Paper
        className={classnames(
          classes.message,
          isMessageFromMe && classes.messageFromMe
        )}
      >
        <Typography variant="caption">{message.sender}</Typography>
        <Typography variant="body1">{message.content}</Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};
