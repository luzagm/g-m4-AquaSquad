import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/core/variables.scss";
import UserList from "./user/User";
//copiar estos dos para aside
import doll from "../images/doll.png";
import "../stylesheets/components/AsideBar.scss";
//para aside

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="asidebar__container">
          <img src={doll} alt="doll" className="asidebar__img"></img>
          <h4 className="asidebar__name">Cayetana</h4>
          <h5 className="asidebar__job">Digital Bus Integration Analyst</h5>
          <div className="asidebar__paid">
            <h5>MY PAID TIME OFF</h5>
            <small>As of 9/15/19</small>
          </div>
          <div className="asidebar__time">4.4</div>
          <h5>Hours</h5>
          {/* <button>Solicitar</button> */}
        </div>

        <main>
          <Switch>
            {/* <Route exact path="/" component={Login} /> */}

            <Route path="/user" component={UserList} />
            {/* <Route path="/user/form" component={Form} />
            <Route path="/user/confirmation" component={Confirmation} />

            <Route path="/gestor" component={GestorList} />
            <Route path="/gestor/details" component={GestorDetails} />
            <Route path="/gestor/confirmation" component={Confirmation} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
