import React from "react";

import Avatar from "@material-ui/core/Avatar";

import Paper from "@material-ui/core/Paper";
import Input from "../UI/Input/Input";
import Message from "../UI/Message/Message";
import { makeStyles } from "@material-ui/core/styles";

import { messages } from "../../mock-data.json";

const useStyles = makeStyles((theme) => ({
  chatLayout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "64px",
    height: "100%",
    width: "calc(100% - 320px)",
    marginLeft: "320px",
    overflow: "hidden",
  },
  messagesWrapper: {
    overflowX: "scroll",
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: "120px",
  },
  messageInputWrapper: {
    position: "fixed",
    left: "auto",
    right: 0,
    bottom: 0,
    width: `calc(100% - 370px)`,
    padding: theme.spacing.unit * 3,
    background: "#fafafa",
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
  },
}));

export default function Conversation() {
  const classes = useStyles();

  return (
    <main className={classes.chatLayout}>
      <div className={classes.messagesWrapper}>
        {messages &&
          messages.map((message, index) => {
            const isMessageFromMe = message.sender === "me";

            const userAvatar = <Avatar>{message.sender[0]}</Avatar>;

            return (
              <Message
                index={index}
                isMessageFromMe={isMessageFromMe}
                userAvatar={userAvatar}
                message={message}
              />
            );
          })}
      </div>
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
          <Input fullWidth placeholder="Type your message…" />
        </Paper>
      </div>
    </main>
  );
}
