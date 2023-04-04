import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  submit() {
    const { username, password } = this.state;
    this.props.onSubmit({ username, password });
  }

  render() {
    const { pendingLogin } = this.props
    return (
      <>
        <input type="text" onChange={this.onChangeUsername} placeholder="username" />
        <input type="password" onChange={this.onChangePassword} placeholder="password" />
        <button onClick={() => this.submit()} disabled={pendingLogin}>Login</button>
        <br />
        Hint: username = 1, password = 1
      </>)
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
