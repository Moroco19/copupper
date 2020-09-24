import React from 'react';
import './App.css';
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom';
// import Routes from './components/Routes';
import Auth from './modules/auth';
import {CopupperList} from './components/Copuppers/';
import LoginForm from './components/Users/LoginForm';
import RegisterForm from './components/Users/RegisterForm';
import Profile from './components/Users/Profile';
import Nav from "./components/Nav";
import CoPupperAdd from './components/Copuppers/CopupperAdd';
import CoPupperUpdate from './components/Copuppers/CopupperUpdate';
import CoPupperProfile from './components/Copuppers/CopupperProfile';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      selectedCopupper: '',
      auth: Auth.isUserAuthenticated(),
    }
  }

  navUser = (val) => {
    this.setState({
      user: val
    })
  }

  updateSelectedCopupper = (val) => {
    this.setState({
      selectedCopupper: val,
    })
  }

  handleLoginSubmit = (evt, values) => {
    evt.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(res => {
      Auth.authenticateUser(res.token)
      this.setState({
        fireRedirect: true,
        redirectPath: '/profile',
        auth: Auth.isUserAuthenticated(),
      })
    })
  }

  handleRegisterSubmit = (evt, values) => {
    evt.preventDefault();
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          user: values
        })
    })
    .then(res => res.json())
    .then(res => {
      Auth.authenticateUser(res.token)
      this.setState({
        fireRedirect: true,
        redirectPath: '/profile',
        auth: Auth.isUserAuthenticated(),
      })
    })
  }

  handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    this.setState({
      auth: false,
    })
    Auth.deauthenticateUser();
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.auth
            ? <Nav navUser={this.navUser} handleLogout={this.handleLogout}/>
            : <div className="not-logged-in">
                <aside className="left-aside">
                  <h1>Welcome to the CoPuppers!</h1>
                  <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>
                  <p>Note a member yet? Register <Link to="/register">here</Link></p>
                </aside>
                <aside className="right-aside">
                </aside>
              </div>
          }
        
        <Route exact path="/copuppers/:id/edit" render={(match) => <CoPupperUpdate copupper={this.selectedCopupper} match={match} />} />
        <Route exact path="/copuppers/:id" render={(match) => <CoPupperProfile match={match} />} />
        <Route exact path="/copuppers" component={CopupperList} />
        <Route exact path="/login" render={() => <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>} />
        <Route exact path="/register" render={() => <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>} />
        <Route exact path="/profile" render={() => <Profile updateSelectedCopupper={this.updateSelectedCopupper} />} />
        <Route exact path="/add-copupper" component={CoPupperAdd} />
        <Route exact path="/logout"><Redirect to="/"/></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
