import React from "react";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import InputIcon from "@material-ui/icons/Input";

class SignupForm extends React.Component {
  state = {
    username: {
      value: "",
      isValid: true,
    },
    password: {
      value: "",
      isValid: true,
    },
    repeatedPassword: {
      value: "",
      isValid: true,
    },
  };

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid },
    });

    return isValid;
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

    if (!this.validate()) {
      return;
    }

    const { username, password } = this.state;

    this.props.onSubmit(username.value, password.value);
  };

  render() {
    const { username, password, repeatedPassword } = this.state;

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
          autoComplete="new-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <Input
          required
          name="repeatedPassword"
          label="Repeat password"
          placeholder="Type your username..."
          type="password"
          margin="normal"
          autoComplete="new-password"
          value={repeatedPassword.value}
          onChange={this.handleInputChange}
          error={!repeatedPassword.isValid}
        />
        <Button icon={<InputIcon />} onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default SignupForm;
