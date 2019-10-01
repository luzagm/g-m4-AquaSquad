import React from "react";
import Header from "./Header";
import Input from "./user/Inputs";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./../stylesheets/components/Login.scss";

const Login = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <div className="login__container">
        <h1 className="login__title">LOGIN</h1>
        <form>
          <Input placeholder="Usuario" />
          <Input placeholder="Contraseña" />
          <Link to="/user/form">
            <div className="login__button--container">
              <Button name="Acceder" />
            </div>
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
