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

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Welcome to the CoPupper App!</h1>
          <Nav navUser={this.navUser}/>
          {this.state.auth
            ? ''
            : <p>Log In <Link to="/login">Here</Link></p>}
        
        <Route exact path="/copuppers/:id/edit" render={(match) => <CoPupperUpdate copupper={this.selectedCopupper} match={match} />} />
        <Route exact path="/copuppers/:id" render={(match) => <CoPupperProfile match={match} />} />
        <Route exact path="/copuppers" component={CopupperList} />
        <Route exact path="/login" render={() => <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>} />
        <Route exact path="/profile" render={() => <Profile updateSelectedCopupper={this.updateSelectedCopupper} />} />
        <Route exact path="/add-copupper" component={CoPupperAdd} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
