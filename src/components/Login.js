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
      time_off: "",
      project: ""
    };
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
    this.setState({ userPassword: userPassword });

    if (userPassword === "vacapollo") {
      console.log(`Contraseña correcto`);
    }
  }

  sendLogin(event) {
    const userLogin = event.currentTarget.value;
    const emailUser = this.state.users.find(user => {
      return user.email === userLogin;
    });

    if (userLogin === emailUser.email) {
      this.setState({
        username: emailUser.name,
        is_leader: emailUser.is_leader,
        time_off: emailUser.time_off,
        project: emailUser.project
      });
    }

    if (userLogin === "laurapareja@accenture.com") {
      console.log("Mail correcto");
      this.setState({ usermail: userLogin });
    }
  }

  actionButtonLogin(event) {
    if (this.state.is_leader === "") {
      event.preventDefault();
      alert("Login incorrecto");
    }
  }
  getLinkButton() {
    if (this.state.is_leader === false) {
      return "/user";
    } else {
      return "/user/gestor";
    }
  }

  render() {
    const { props } = this;

    console.log("laurapareja@accenture.com");
    console.log("josemaria.delanieta@accenture.com");

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
                actionInput={this.actionPassword}
              />
              <Link
                onClick={this.actionButtonLogin}
                className="login__button--container"
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
