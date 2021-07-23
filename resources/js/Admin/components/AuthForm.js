import logo from '../assets/img/logo/logo.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
import API from './API/API';
import history from '../utils/history';
import cookie from 'react-cookies';
import ModalAction from './Modal';
class AuthForm extends React.Component {
  call = new API();
  state = {
    userName: null,
    password: null,
    confirmPassword: null,
    errors: null,
    error_confirm: null,
    message: null,
    action: false,
    code: null
  };
  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {
    event.preventDefault();
    this.props.onChangeAuthState(authState);
  };
  handleChange = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val
    })
  }
  login = async () => {
    let form = new FormData;
    form.append('userName', this.state.userName);
    form.append('password', this.state.password);
    let data = await this.call.callAPI('login', 'post', form).then((response) => { return response.data });
    if (data.err == 0) {
      this.setState({
        action: true
      })
    }
    this.setState({ errors: data })
  }
  sendPassword = async () => {
    let data = await this.call.callAPI('send', 'post', '').then((response) => { return response.data });
    this.setState({
      message: "Your password was be send to your email!"
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    let button = this.renderButtonText();
    if (button == "Login")
      this.login();
  };
  veryfy = async (event) => {
    event.preventDefault();
    let form = new FormData;
    form.append('code', this.state.code);
    let data = await this.call.callAPI('verify', 'post', form).then((response) => { return response.data });
    if (data.err == 0) {
      cookie.save('admin', data.user, { path: '/' })
      history.push('/admin');
      window.location.reload();
    }
    else {
      this.setState({ error_confirm: data.message });
    }

  }
  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }
  close = () => {
    this.setState({
      action: false,
    });
  };
  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;
    let body_modal = <FormGroup>
      <Label>Code</Label>
      <Input name='code' placeholder="Enter the code" onChange={this.handleChange}></Input>
    </FormGroup>
    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src='https://www.passerellesnumeriques.org/misc/logo-fr.png'
              className="rounded"
              style={{ width: 300, height: 100, cursor: 'pointer', padding:0, margin:0 }}
              alt="logo"
            />
          </div>
        )}
        {
          this.state.message != null &&
          <Alert color="success">
            {this.state.message}
          </Alert>
        }
        <ModalAction action={this.veryfy} body={body_modal} open={this.state.action} close={this.close} alert={this.state.error_confirm} title="Account Verification!" />
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input onChange={this.handleChange} {...usernameInputProps} required />
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input onChange={this.handleChange} {...passwordInputProps} required />
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input onChange={this.handleChange} {...confirmPasswordInputProps} required />
          </FormGroup>
        )}

        <FormGroup check>
          <Label check>
            <Input type="checkbox" required />{' '}
            {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
          </Label>
        </FormGroup>
        <hr />
        {this.state.errors != null &&
          <Alert color="warning">
            {this.state.errors.message}
          </Alert>
        }
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
        >
          {this.renderButtonText()}
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            {this.isSignup ? (
              <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a>

            ) : (
              <Button
                size="sm"
                onClick={this.sendPassword}
                block>
                Forgot password
              </Button>
            )}
          </h6>
        </div>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'User name',
  usernameInputProps: {
    type: 'text',
    name: 'userName',
    placeholder: 'Your user name',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    name: 'password',
    placeholder: 'Your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => { },
};

export default AuthForm;