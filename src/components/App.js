import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import UserList from "./user/User";
import GestorList from "./gestor/GestorList";
import GestorDetails from "./gestor/GestorDetail";
import Confirmation from "./Confirmation";
import Form from "./user/Form";
import "../stylesheets/App.scss";
import "../stylesheets/core/variables.scss";

const dataurl = "./services/users.json";
const holidaysurl = "./services/holidays.json";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      holidays: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // Esta cadena está bien, quizá le metería un catch por si acaso
    Promise.all([fetch(dataurl), fetch(holidaysurl)])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([usersData, holidaysData]) => {
        this.setState({
          users: usersData,
          holidays: holidaysData
        });
      })
      .catch(err => console.error(err)); // si haces npm start, la primera vez, clickas en el gestor, donde se pinta la info que nos interesa. ahi en consola nos tiene que pasar el estado que pasamos por props... esa info se pasa SOLO la primera vez
    // no se qué es "gestor", pero entiendo que este es el componente principal (se llama App y tiene las rutas) así que se monta solo una vez. Solo se llama a getData una vez

    // a qué te refieres con "esa info se pasa solo la primera vez?" cuando recargas la web no se pasa??
    // cuando recargas peta, el estado se queda en vacío. te paso pantallazos en telegram

    // estás haciendo holidays.holidays.map, no debería ser holidays.map? <-- en el componente hijo, que no está abierto, pero lo veo en los pantallazos
  }

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

    if (this.state === []) {
      return <p>Loading</p>;
    }
    return (
      <div className="App">
        <main className="main container-fluid">
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route
              exact
              path="/user"
              render={() => {
                return <UserList holidaysData={this.state.holidays} />;
              }}
            />
            <Route exact path="/user/form" component={Form} />
            <Route exact path="/user/confirmation" component={Confirmation} />
            <Route
              exact
              path="/gestor"
              render={() => {
                return <GestorList data={this.state} userData={this.state.users} userHolidays={this.state.holidays} />; //necesitamos pasar this.state para que al recargar nos lleguen los datos, para userData
              }}
            />
            <Route exact path="/gestor/details" component={GestorDetails} />
            <Route path="/gestor/confirmation" component={Confirmation} />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
