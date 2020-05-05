import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { chats } from "../../mock-data.json";

const useStyles = makeStyles((theme) => ({
  chatsList: {
    height: "calc(100% - 56px)",
    overflowY: "scroll",
  },
}));

export default function UserList() {
  const classes = useStyles();

  return (
    <List className={classes.chatsList}>
      {chats.map((chat, index) => (
        <ListItem key={index} button>
          <Avatar>{chat.title && chat.title[0]}</Avatar>
          <ListItemText primary={chat.title} />
        </ListItem>
      ))}
    </List>
  );
}