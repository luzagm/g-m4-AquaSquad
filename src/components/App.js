import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/core/variables.scss";
import UserList from "./user/User";
import GestorList from "./leader/LeadGestor";
import Confirmation from "./Confirmation";
import Login from "./Login";




class App extends React.Component {

  // fetch(nombredevariableconjson)
  // .then(response=>response.json())

  // Promise.resolve(nombredevariableconjson)
  //devuelve una promesa con el valor que le pases

  // .then(funcionQuePromesaLaRespuesta)

  //Promise.reject(mock de un error)
  //y así en lugar de entrar por el then, entrará por el catch
  // .catch((err) => console.error(err)) 
  //nos chiva en  consola los errores, y luego ya añadiréis control de errores en condiciones

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={Login} />

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
