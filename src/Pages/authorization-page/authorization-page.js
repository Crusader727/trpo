import './authorization-page.css';

import React from 'react';
import Button from './../../Components/button/button.js';
import { Link, Redirect } from 'react-router-dom';
import fire from './../../config/Fire.js';
import Auth from './../../Components/auth/auth.js';

class Authorization extends React.Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
  }


  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.props.login(user);
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        this.props.logout();
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className='authorization-page'>
        {this.state.user ? (<Redirect to='/' />) : (<Auth />)}
        <div className='authorization-register'>
          <div className='title-no-account'>
            <span>У вас еще нет аккаунта?</span>
          </div>
          <Link to='/register'>
            <Button type='blue' text='РЕГИСТРАЦИЯ' />
          </Link>
        </div>
      </div>
    );
  }
}

export default Authorization;
