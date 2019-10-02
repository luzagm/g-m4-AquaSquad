import React from "react";
import "../stylesheets/components/Filters.scss";

const renderName = data => {
  return data.map((user, index) => {
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

const renderProject = data => {
  return data.map((user, index) => {
    return (
      <option value={user.project} key={index}>
        {user.project}
      </option>
    );
  });
};

const Filters = props => {
  const { data, handleSelect } = props;
  // console.log(data.project);

  return (
    <form className="gestor__wrap--filter">
      <select className="gestor__wrap--selectfilter" name="user">
        <option>Usuario</option>
        {renderName(data)}
      </select>

      <select className="gestor__wrap--selectfilter" name="chapter">
        <option>Chapter</option>
        {renderChapter(data)}
      </select>

      <select
        className="gestor__wrap--selectfilter"
        name="project"
        onChange={handleSelect}
      >
        <option value="">Proyecto</option>
        {renderProject(data)}
      </select>
    </form>
  );
};

export default Filters;
