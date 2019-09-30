import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylehseets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            
            <Route path="/user" component={User List} />
            <Route path="/user/form" component={Form} />
            <Route path="/user/confirmation" component={Confirmation} />
            
            <Route path="/gestor" component={Gestor List} />
            <Route path="/gestor/details" component={Gestor Details} />
            <Route path="/gestor/confirmation" component={Confirmation} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
