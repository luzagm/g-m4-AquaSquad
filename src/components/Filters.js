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

// const renderProject = data => {
//   return data.map((user, index) => {
//     return (
//       <option value={user.project} key={index}>
//         {user.project}
//       </option>
//     );
//   });
// };

const Filters = props => {
  const { data, getUserName } = props;

  return (
    <form className="gestor__wrap--filter">
      <select
        className="gestor__wrap--selectfilter"
        name="user"
        onChange={getUserName}
      >
        <option value="">Usuario</option>
        {renderName(data)}
      </select>

      {/* <select
        className="gestor__wrap--selectfilter"
        name="project"
        onChange={getProject}
      >
        <option value="">Proyecto</option>
        {renderProject(data)}
      </select> */}
    </form>
  );
};

export default Filters;
