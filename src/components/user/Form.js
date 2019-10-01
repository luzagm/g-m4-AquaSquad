import React from "react";
import Input from "./Inputs";
import { Link } from "react-router-dom";
import Button from "../Button";

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="request__wrap">
          <form className="request__form">
            <h2 className="request__form--title">Solicitud de vacaciones</h2>
            <div className="left-inputs">
              <Input label="Desde" placeholder="13/09/2019" />
              <Input type="select" placeholder="Jefe de proyecto" />
              <Input type="select" placeholder="Chapter" />
            </div>
            <div className="right-inputs">
              <Input label="Hasta" placeholder="16/09/2019" />
              <Input type="text" placeholder="Asunto" />
            </div>
            <Link to="/gestor/confirmation">
              <Button className="request__form--submitButton" name="Enviar" />
            </Link>
            <Button
              className="request__form--submitButton"
              name="Añadir otra petición"
            />
          </form>
        </main>
      </React.Fragment>
    );
  }
}

export default Form;
