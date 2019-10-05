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
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      holidays: [],
      userName: "",
      project: "",
      userLogin: "",
      is_leader: "",
      time_off: '',
      employee_id: '',
      picture: '',
    };
    this.getUserData = this.getUserData.bind(this);
    this.getHolidaysData = this.getHolidaysData.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.getProject = this.getProject.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.actionSendUserLogin = this.actionSendUserLogin.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.getHolidaysData = this.getHolidaysData.bind(this);
    this.acceptHolidays = this.acceptHolidays.bind(this);
    this.rejectHolidays = this.rejectHolidays.bind(this);
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


  actionSendUserLogin = (login) => {
    return this.setState({
      userLogin: login.userLogin,
      is_leader: login.is_leader,
      time_off: login.time_off,
      project: login.project,
      employee_id: login.employee_id,
      picture: login.picture,
    })
  }

  acceptHolidays(holiday, user) {
    const idUser = user.employee_id;
    const holidayUserLogin = this.state.holidays.holidays.filter(holiday => {
      return holiday.employee_id === idUser
    })

    let day = holidayUserLogin.find(dayHoliday => {
      return holiday === dayHoliday.date.replace(
        /^(\d{4})-(\d{2})-(\d{2})$/g,
        "$3/$2/$1"
      )
    })
    if (day) {
      day.status = "approved"
    } else {
      console.error(`cannot find day for date ${holiday} in ${holidayUserLogin}`)
    }
  }
  rejectHolidays(holiday, user) {
    const idUser = user.employee_id;
    const holidayUserLogin = this.state.holidays.holidays.filter(holiday => {
      return holiday.employee_id === idUser
    })

    let day = holidayUserLogin.find(dayHoliday => {
      return holiday === dayHoliday.date.replace(
        /^(\d{4})-(\d{2})-(\d{2})$/g,
        "$3/$2/$1"
      )
    })
    if (day) {
      day.status = "rejected"
    } else {
      console.error(`cannot find day for date ${holiday} in ${holidayUserLogin}`)
    }
  }


  render() {
    if (this.state === []) {
      return <p>Loading</p>;
    }

    return (
      <div className="App">
        <main className="main container-fluid">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Login actionSendUserLogin={this.actionSendUserLogin} />;
              }}
            />
            <Route
              exact
              path="/user"
              render={() => {
                return (
                  <UserList
                    data={this.state.users}
                    userLogin={this.state}
                    holidays={this.state.holidays}
                    userLogin={this.state.userLogin}
                    time={this.state.time_off}
                    userLoginId={this.state.employee_id}
                    picture={this.state.picture}
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
                    users={this.state.users}
                    userLogin={this.state.userLogin}
                    time={this.state.time_off}
                    userLoginId={this.state.employee_id}
                    picture={this.state.picture}

                  />
                );
              }}
            />
            <Route
              path="/user/form"
              render={() => {
                return (
                  <Form
                    userLogin={this.state.userLogin}
                    time={this.state.time_off}
                    getProject={this.getProject}
                    data={this.state.users}
                    picture={this.state.picture}
                  />
                );
              }}
            />
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
                    rejectHolidays={this.rejectHolidays}
                    userLogin={this.state.userLogin}
                    time={this.state.time_off}
                    picture={this.state.picture}
                  />
                );
              }}
            />
            <Route exact path="/gestor/details"
              render={() => {
                return (
                  <GestorDetails
                    picture={this.state.picture}
                  />
                );
              }} />

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
