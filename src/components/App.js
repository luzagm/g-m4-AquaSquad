import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import UserList from "./user/User";
import UserListGestor from "./gestor/UserListGestor";
import GestorList from "./gestor/GestorList";
import GestorDetails from "./gestor/GestorDetail";
import Confirmation from "./Confirmation";
import ConfirmationGestor from "./ConfirmationGestor";
import Form from "./user/Form";
import "../stylesheets/App.scss";
import "../stylesheets/core/variables.scss";
import Reject from "./Reject";

const dataurl = "./services/users.json";
const holidaysurl = "./services/holidays.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      holidays: [],
      userName: "",
      project: "",

    };
    this.getUserData = this.getUserData.bind(this);
    this.getHolidaysData = this.getHolidaysData.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.getProject = this.getProject.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.actionSendUserLogin = this.actionSendUserLogin.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.getHolidaysData = this.getHolidaysData.bind(this);
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

  getUserName(event) {
    const selectUserName = event.currentTarget.value;
    this.setState({ userName: selectUserName });
  }
  acceptHolidays(event) {
    console.dir(event)
    console.log('accepting holidays')
  }

  actionSendUserLogin = (login) => {
    return this.setState({
      username: login.username,
      is_leader: login.is_leader,
      time_off: login.time_off,
      project: login.project,
    })
  }


  render() {
    if (this.state === []) {
      return <p>Loading</p>;
    }
    console.log(this.state)

    return (
      <div className="App">
        <main className="main container-fluid">
          <Header />
          <Switch>
            <Route exact path="/" render={() => {
              return (<Login actionSendUserLogin={this.actionSendUserLogin} />)
            }} />
            <Route
              exact
              path="/user"
              render={() => {
                return (
                  <UserList
                    data={this.state.users}
                    holidays={this.state.holidays}
                  />
                );
              }}
            />
            <Route
              exact
              path="/user/gestor"
              render={() => {
                return (
                  <UserListGestor
                    holidays={this.state.holidays}
                    data={this.state.users}
                  />
                );
              }}
            />
            <Route path="/user/form" component={Form} />
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
                    getProject={this.getProject}
                    userName={this.state.userName}
                    project={this.state.project}
                    acceptHolidays={this.acceptHolidays}
                  />
                );
              }}
            />
            <Route exact path="/gestor/details" component={GestorDetails} />
            <Route exact path="/gestor/confirmation" component={Confirmation} />
            <Route
              exact
              path="/gestor/confirmation/give"
              component={ConfirmationGestor}
            />
            <Route exact path="/reject" component={Reject} />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
