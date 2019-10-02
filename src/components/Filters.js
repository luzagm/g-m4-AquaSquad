import React from "react";
import "../stylesheets/components/Filters.scss";

const renderName = data => {
  const listOrdered = data.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return listOrdered.map((user, index) => {
    return (
      <option value={user.name} key={index}>
        {user.name}
      </option>
    );
  });
};

const renderChapter = data => {
  return data.map((user, index) => {
    return (
      <option value={user.chapter_name} key={index}>
        {user.chapter_name}
      </option>
    );
  });
};

const Filters = props => {
  const { usersData } = props;

  return (
    <form className="gestor__wrap--filter">
      <select className="gestor__wrap--selectfilter" name="user">
        <option>Usuario</option>
        {renderName(usersData)}
      </select>
      <select className="gestor__wrap--selectfilter" name="chapter">
        <option>Chapter</option>
        {renderChapter(usersData)}
      </select>

      <select className="gestor__wrap--selectfilter" name="project">
        <option>Proyecto</option>
        <option value="Liquid Squad">Liquid Squad</option>
        <option value="Wadus project">Wadus project</option>
      </select>
    </form>
  );
};

export default Filters;
