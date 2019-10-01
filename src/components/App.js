import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/core/variables.scss";
import "../stylesheets/App.scss";
import Header from "./Header";
import UserList from "./user/User";
import GestorList from "./leader/LeadGestor";
import Confirmation from "./Confirmation";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="main container-fluid">
          <Header />
          <Switch>
            {/* <Route exact path="/" component={Login} /> */}

            <Route exact path="/user" component={UserList} />
            {/* <Route path="/user/form" component={Form} /> */}
            <Route exact path="/user/confirmation" component={Confirmation} />

            <Route path="/gestor" component={GestorList} />
            {/* <Route path="/gestor/details" component={GestorDetails} />
            <Route path="/gestor/confirmation" component={Confirmation} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
