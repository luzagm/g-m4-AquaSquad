import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "../../stylesheets/components/GestorDetailInfo.scss";

const GestorDetailInfo = () => {
  return (
    <div>
      <div className="detail__box">
        <div className="detail__description">
          <p>Nombre:</p>
          <p>Proyecto:</p>
          <p>Jefe de proyecto:</p>
          <p>Cliente:</p>
          <p>Oficina:</p>
          <p>Vacaciones:</p>
        </div>
        <div>
          <div className="detail__info">
            <p>Sara Marín</p>
            <p>Equipo 5</p>
            <p>Isabel Pizarro</p>
            <p>Equipo 5</p>
            <p>Liquid Squad Madrid</p>
            <p>
              <span className="detail__info--bold">08/10/2019</span>
            </p>
          </div>
        </div>
        <div className="detail__button">
          <Link to="/gestor/confirmation/give">
            <button className="detail__button--approve">Aprobar</button>
          </Link>
          <Link to="/reject">
            <button className="detail__button--deny ">Rechazar</button>
          </Link>
        </div>
      </div>

      <div className="back-gestor-button">
        <Link to="/gestor">
          <Button name="Volver a solicitudes" />
        </Link>
      </div>
    </div>
  );
};

export default GestorDetailInfo;
