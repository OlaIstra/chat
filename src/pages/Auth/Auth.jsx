import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

class Auth extends React.Component {
  state = {
    activeTab: 0,
  };

  handleTabChage = (event, value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <Grid container justify="center">
        <Grid item>
          <Paper>
            <Tabs value={activeTab} onChange={this.handleTabChage}>
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
            <div>
              {activeTab === 0 && <LoginForm />}
              {activeTab === 1 && <SignupForm />}
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Auth;
