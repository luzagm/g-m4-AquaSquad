import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import UserList from "./user/User";
import GestorList from "./gestor/GestorList";
import GestorDetails from "./gestor/GestorDetail";
import Confirmation from "./Confirmation";
/* import Form from "./user/Form"; */
import "../stylesheets/App.scss";
import "../stylesheets/core/variables.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="main container-fluid">
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/user" component={UserList} />
            {/* <Route path="/user/form" component={Form} /> */}
            <Route exact path="/user/confirmation" component={Confirmation} />

            <Route exact path="/gestor" component={GestorList} />
            <Route exact path="/gestor/details" component={GestorDetails} />
            {/* <Route path="/gestor/confirmation" component={Confirmation} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
