import './auth.css';

import React from 'react';
import Button from './../button/button.js';
import fire from '../../config/Fire';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      error: false
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      this.setState({ error: false })
    }).catch((error) => {
      this.setState({ error });
    });
  }

  render() {
    return (
      <form className='authorization'>
        <span className='enter'>ВХОД</span>
        <span>Введите почту:</span>
        <input value={this.state.email}
          onChange={this.handleChange}
          type='email'
          name='email'
          className='login'
          placeholder='Почта'
        />
        <span>Пороль:</span>
        <input
          value={this.state.password}
          onChange={this.handleChange}
          type='password'
          name='password'
          className='password'
          placeholder='Пороль'
        />
        {this.state.error ? <div className='error'>Проверьте правильность введенных вами данных!</div> : null}
        <Button onClick={this.login} type='white' text='ВХОД' />
      </form>
    );
  }
}
export default Auth;
