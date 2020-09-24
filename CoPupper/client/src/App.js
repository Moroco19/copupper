import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import Routes from './components/Routes';
import Auth from './modules/auth';
import {CopupperList} from './components/Copuppers/';
import LoginForm from './components/Users/LoginForm';
import Profile from './components/Users/Profile';
import Nav from "./components/Nav";
import CoPupperAdd from './components/Copuppers/CopupperAdd';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      auth: Auth.isUserAuthenticated(),
    }
  }

  navUser = (val) => {
    this.setState({
      user: val
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

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Welcome to the CoPupper App!</h1>
          <Nav navUser={this.navUser}/>
          {this.state.auth
            ? ''
            : <p>Log In <Link to="/login">Here</Link></p>}
        
        <Route exact path="/copuppers" component={CopupperList} />
        <Route exact path="/login" render={() => <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/add-copupper" component={CoPupperAdd} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
