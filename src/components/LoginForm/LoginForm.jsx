import React from "react";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import InputIcon from "@material-ui/icons/Input";

class LoginForm extends React.Component {
  state = {
    username: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
  };

  handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    console.log("Login:", username.value, password.value);

    // ...
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          required
          name="username"
          label="Username"
          placeholder="Type your username..."
          type="text"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <Input
          required
          name="password"
          label="Password"
          placeholder="Type your username..."
          type="password"
          margin="normal"
          autoComplete="current-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <Button icon={<InputIcon />} />
      </form>
    );
  }
}

export default LoginForm;
