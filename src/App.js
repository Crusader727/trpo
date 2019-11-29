import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './Pages/main-page/main-page.js';
import MainPage from './Pages/main-page/main-page.js';
import Header from './Components/header/header.js';

import Authorization from './Pages/authorization-page/authorization-page.js';
import Register from './Pages/register-page/register-page.js';
import KabinetPage from './Pages/kabinet-page/kabinet-page';

import fire, { database } from './config/Fire.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AdminsModule } from './TableModule/admins';

class App extends React.Component {
  state = {
    user: null,
    isAdmin: false,
  }

  logout = () => {
    this.setState({ user: null });
    fire.auth().signOut();
    localStorage.removeItem('user');
  }

  login = (user) => {
    database.ref('users/' + user.uid).once('value').then((snap) => this.setState({ results: snap.val() }));
    this.setState({ user });
    user && user.uid && AdminsModule.isAdmin(user.uid).then(isAdmin => this.setState({ isAdmin })).catch(console.log);
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <Header logout={this.logout} isLoggedin={Boolean(this.state.user)} />
          <Route path='/home'
            render={() => this.state.user ?
              <Redirect to='/kabinet ' /> :
              <Redirect to='/authorization' />
            }
          />
          <Route path='/register' render={() => <Register login={this.login} logout={this.logout} />} />
          <Route path='/authorization'
            render={() => <Authorization login={this.login} logout={this.logout} />}
          />
          <Route path='/kabinet' render={() => <KabinetPage userId={this.state.user && this.state.user.uid} isAdmin={this.state.isAdmin} />} />
          <Route exact path='/' render={() => <MainPage userId={this.state.user && this.state.user.uid} />} />
        </div>
      </Router>
    );
  }
}

export default App;
