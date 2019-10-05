import React from "react";
import AsideBar from "../AsideBar";
import Input from "./Inputs";
import { Link } from "react-router-dom";
import Button from "../Button";
import "../../stylesheets/components/Form.scss";
import "../../assets/icons/calendar-icon.svg";

const renderProject = data => {
  return data.map((user, index) => {
    return (
      <option value={user.project} key={index}>
        {user.project}
      </option>
    );
  });
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      project: ""
    }
  }

  render() {
    const {
      props,
    } = this;

    // const handleDateRequest = (event) => {
    //   const dateRequest = event.currentTarget.value;
    //   this.setState({
    //     date: dateRequest
    //   })
    // }

    // const handleRequest = () => {
    //   const date = this.state.date;
    //   props.actionDateRequest(date)
    // }

    return (
      <React.Fragment>
        <main className="request__wrap row">
          <AsideBar time={props.time} name={props.userLogin} />

          <div className="wrap__form col-9">
            <form className="request__form">
              <h2 className="request__form--title">Solicitud de vacaciones</h2>
              <div className="request__form--inputs">
                <div className="left-inputs">
                  <Input
                    classLabel="date"
                    classInput="request__date"
                    label="Desde"
                    type="date"
                  // actionInput={handleDateRequest}
                  />
                  {/* hacemos un select para agilizar la demo */}
                  <select
                    className="request__leader "
                    name="ProjectLeader"
                  >
                    <option value="">Jefe de proyecto</option>
                    <option value="">Isabel Pizarro</option>
                  </select>

                  <select
                    className="request__project"
                    name="project"
                    onChange={props.getProject}
                  >
                    <option value="">Proyecto</option>
                    {renderProject(props.data)}
                  </select>
                  {/* <Input
                    classInput="request__chapter"
                    type="select"
                    placeholder="Chapter"
                  /> */}
                </div>

                <div className="right-inputs">
                  <Input
                    classLabel="date"
                    classInput="request__date"
                    label="Hasta"
                    placeholder="16/09/2019"
                    type="date"
                  />
                  <Input
                    classInput="request__text"
                    type="text"
                    placeholder="Asunto"
                  />
                </div>
              </div>

              <Link
                className="request__form--buttonbox"
                to="/gestor/confirmation"
              // onClick={handleRequest}
              >
                <Button name="Enviar" />
              </Link>
            </form>

            <div className="request__form--addButtonBox">
              <Link
                className="request__form--buttonbox"
                to="/user"
              >
                <Button name="Volver" />
              </Link>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default Form;
