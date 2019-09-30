import React from "react";
import "../stylesheets/components/Filters.scss";

const Filters = props => {
  return (
    <form className="gestor__wrap--filter">
      <select className="gestor__wrap--selectfilter" name="user">
        <option value="Usuario">Usuario</option>
        <option value="Liquid Squad">Liquid Squad</option>
        <option value="Wadus project">Wadus project</option>
      </select>

      <select className="gestor__wrap--selectfilter" name="chapter">
        <option value="-">Chapter</option>
        <option value="Front">Front</option>
        <option value="DevOps">DevOps</option>
        <option value="Mobile">Mobile</option>
        <option value="Hybrid Space">Hybrid Space</option>
      </select>

      <select className="gestor__wrap--selectfilter" name="project">
        <option value="Proyecto">Proyecto</option>
        <option value="Liquid Squad">Liquid Squad</option>
        <option value="Wadus project">Wadus project</option>
      </select>
    </form>
  );
};

export default Filters;
