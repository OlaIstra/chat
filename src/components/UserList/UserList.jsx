import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar } from "../UI/Avatar/Avatar";
import { chats } from "../../mock-data.json";

const useStyles = makeStyles((theme) => ({
  chatsList: {
    height: "calc(100% - 56px)",
    overflowY: "scroll",
  },
}));

export const UserList = () => {
  const classes = useStyles();

  return (
    <List className={classes.chatsList}>
      {chats.map((chat, index) => {
        return (
          <ListItem key={index} button>
            <Avatar colorFrom={chat.title}>{chat.title}</Avatar>
            <ListItemText primary={chat.title} />
          </ListItem>
        );
      })}
    </List>
  );
};
