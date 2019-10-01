import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import UserList from "./user/User";

//para aside
import Form from "./user/Form";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={Login} />

            {/* <Route path="/user" component={UserList} /> */}
            <Route path="/user/form" component={Form} />
            {/*<Route path="/user/confirmation" component={Confirmation} />

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
