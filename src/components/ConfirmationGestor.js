import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";
import "../stylesheets/components/Confirmation.scss";

const ConfirmationGestor = () => {
  return (
    <div className="confirmation__container">
      <div className="confirmation__wrap">
        <h2 className="confirmation__title">
          Solicitud de vacaciones Aprobada
        </h2>
        <p className="confirmation__text">
          La solicitud de las vacaciones de <strong>Sara Marin</strong> para el día <span className="confirmation__date">08/10/2019</span> ha sido <strong>aprobada</strong> correctamente.
        </p>
        <Link to="/gestor">
          <Button name="Volver a solicitudes" />
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationGestor;
