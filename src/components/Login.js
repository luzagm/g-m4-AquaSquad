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
      is_leader: "",
      time_off: '',
      project: '',
      password: false,
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
      return user.email === userLogin
    })
    if (emailUser) {
      this.setState({
        username: emailUser.name,
        is_leader: emailUser.is_leader,
        time_off: emailUser.time_off,
        project: emailUser.project,
      })
    }
  }

  actionButtonLogin(event, actionSendUserLogin) {
    if (this.state.password === false || this.state.username === "") {
      event.preventDefault()
      alert('Login incorrecto')
    } else {
      this.actionSendUserLogin(this.state);
      this.getLinkButton();
    }
  }
  actionSendUserLogin(login) {
    return login
  }

  getLinkButton() {
    if (this.state.is_leader === false && this.state.password === true) {
      return "/user"
    } else {
      return "/user/gestor"
    }
  }

  render() {
    const {
      props,
    } = this;
    // console.log('laurapareja@accenture.com')
    // console.log('josemaria.delanieta@accenture.com')
    return (
      <React.Fragment>
        <div className="login__container">
          <h1 className="login__title">LOGIN</h1>
          <form onSubmit={this.action} method='post' >
            <Input type="text" placeholder="Usuario" actionInput={this.sendLogin} />
            <Input type="password" placeholder="Contraseña" actionInput={this.sendPassword} />
            <Link onClick={this.actionButtonLogin} to={this.getLinkButton()}>
              <Button name="Acceder" />
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
