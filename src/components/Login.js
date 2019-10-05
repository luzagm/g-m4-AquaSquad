import React from "react";
import Input from "./user/Inputs";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./../stylesheets/components/Login.scss";

const usersUrl = "./services/users.json";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: "",
      userLogin: "",
      is_leader: "",
      time_off: '',
      project: '',
      employee_id: '',
      password: false,
      error: false,
    };
    this.actionSendUserLogin = props.actionSendUserLogin;
    this.sendLogin = this.sendLogin.bind(this);
    this.sendPassword = this.sendPassword.bind(this);
    this.actionButtonLogin = this.actionButtonLogin.bind(this);
    this.getLinkButton = this.getLinkButton.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    fetch(usersUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data });
      });
  }

  sendPassword(event) {
    const userPassword = event.currentTarget.value;
    if (userPassword !== "") {
      this.setState({ password: true });
    } else {
      this.setState({ password: false });
    }
  }

  sendLogin(event) {
    const userLogin = event.currentTarget.value;
    const emailUser = this.state.users.find(user => {
      return user.email === userLogin;
    });
    if (emailUser) {
      this.setState({
        userLogin: emailUser.name,
        is_leader: emailUser.is_leader,
        time_off: emailUser.time_off,
        project: emailUser.project,
        employee_id: emailUser.employee_id,
        picture: emailUser.picture
      })
    }
  }

  actionButtonLogin(event, actionSendUserLogin) {
    if (this.state.password === false || this.state.userLogin === "") {
      event.preventDefault();
      this.setState({ error: true })
    } else {
      this.setState({ error: false })
      this.actionSendUserLogin(this.state);
      this.getLinkButton();
    }
  }
  actionSendUserLogin(login) {
    return login;
  }

  getLinkButton() {
    if (this.state.is_leader === false && this.state.password === true) {
      return "/user";
    } else {
      return "/user/gestor";
    }
  }

  render() {
    const { props } = this;
    const { error } = this.state;
    // console.log('laurapareja@accenture.com')
    // console.log('josemaria.delanieta@accenture.com')

    return (
      <React.Fragment>
        <div className="login__container">
          <div className="login__box">
            <h1 className="login__title">LOGIN</h1>
            <form onSubmit={this.action} method="post">
              <Input
                type="text"
                placeholder="Usuario"
                actionInput={this.sendLogin}
              />
              <Input
                type="password"
                placeholder="Contraseña"
                actionInput={this.sendPassword}
              />
              {error && (
                <p className="login__error--text">Invalid credentials</p>
              )}
              <Link
                className="login__button--container"
                onClick={this.actionButtonLogin}
                to={this.getLinkButton()}
              >
                <Button className="login__button--enter" name="Acceder" />
              </Link>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
