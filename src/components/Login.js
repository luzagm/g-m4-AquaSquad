import React from "react";
import Header from "./Header";

import Input from "./user/Inputs";
import "./../stylesheets/components/Login.scss";
import data from "../services/data";
// import "./Button"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loginData = this.loginData.bind(this);
    this.login = this.login.bind(this);
  }
  componentDidMount() {
    this.login();
  }

  loginData() {
    console.log("hola");
  }

  login() {
    data().then(data => {
      console.log(data);
    });
  }
  // const username = this.state.username;
  // const password = this.state.password;

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="login__container">
          <h1 className="login__title">LOGIN</h1>
          <form>
            <Input placeholder="Usuario" />
            <Input placeholder="Contraseña" />
            <button className="btnPrueba" type="submit">
              Acceder
            </button>
            {/* <Button /> */}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
