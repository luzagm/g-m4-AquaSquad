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
      holidays: [],
      userName: "",
      // chapter: "",
      project: ""
    };
    this.getUserData = this.getUserData.bind(this);
    this.getHolidaysData = this.getHolidaysData.bind(this);
    this.getUserName = this.getUserName.bind(this);
    // this.getChapter = this.getChapter.bind(this);
    this.getProject = this.getProject.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }

  componentDidMount() {
    this.getUserData();
    this.getHolidaysData();
  }

  getUserData() {
    fetch(dataurl)
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data });
      });
  }

  getHolidaysData() {
    fetch(holidaysurl)
      .then(response => response.json())
      .then(data => {
        this.setState({ holidays: data });
      });
  }

  clearFilters() {
    this.forceUpdate();
    this.setState({
      userName: "",
      chapter: "",
      project: ""
    });
  }

  getProject(event) {
    const selectProject = event.currentTarget.value;
    this.setState({ chapter: selectProject });
  }

  // getChapter(event) {
  //   const selectChapter = event.currentTarget.value;
  //   console.log(selectChapter);
  //   this.setState({ chapter: selectChapter });
  // }

  getUserName(event) {
    const selectUserName = event.currentTarget.value;
    this.setState({ userName: selectUserName });
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
    if (this.state === null) {
      return <p>Loading</p>;
    }

    return (
      <div className="App">
        <main className="main container-fluid">
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            {/* <Route
              exact
              path="/user"
              render={() => {
                return <UserList holidaysData={this.state.holidays} />;
              }} */}
            />
            <Route exact path="/user/form" component={Form} />
            <Route exact path="/user/confirmation" component={Confirmation} />
            <Route
              exact
              path="/gestor"
              render={() => {
                return (
                  <GestorList
                    data={this.state.users}
                    holidaysData={this.state.holidays}
                    action={this.clearFilters}
                    getUserName={this.getUserName}
                    // getChapter={this.getChapter}
                    getProject={this.getProject}
                    userName={this.state.userName}
                    // chapter={this.state.chapter}
                    project={this.state.project}
                  />
                );
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
