import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Input from "../UI/Input/Input";
import UserList from "../UserList/UserList";
import Button from "../UI/Button/Button";
import ForumIcon from "@material-ui/icons/Forum";
import ExploreIcon from "@material-ui/icons/Explore";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  btnWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    "& p": {
      margin: "0px",
    },
  },
  newChatButton: {
    position: "absolute",
    left: "auto",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Input fullWidth margin="normal" placeholder="Search chats..." />
      </div>
      <Divider />
      <UserList />
      <Button
        classCustom={classes.newChatButton}
        icon={<AddCircleIcon />}
        ariaLabel="add chat"
      />
      <div className={classes.btnWrapper}>
        <Button label="My Chats" ariaLabel="My Chats" icon={<ForumIcon />} />
        <Button label="Explore" ariaLabel="Explore" icon={<ExploreIcon />} />
      </div>
    </Drawer>
  );
}
