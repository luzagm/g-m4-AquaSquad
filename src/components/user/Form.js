import React from "react";
import Header from "./../Header";
import Input from "./Inputs";
// import Button from "../Button";

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
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
            <button className="request__form--submitButton">Enviar</button>
          </form>
          {/* <Button /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default Form;
