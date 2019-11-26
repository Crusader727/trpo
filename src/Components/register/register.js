import './register.css'

import React from 'react';
import Button from './../../Components/button/button.js';
import fire from '../../config/Fire.js';

import { UserModule } from '../../TableModule/user'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      phone: '',
      isVeterenarian: false,
      price: '',
      img: '',
      speciality: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        if (this.state.isVeterenarian) {
          const { name, phone, isVeterenarian, price, img, speciality } = this.state;
          UserModule.createUser(user.user.uid, { name, phone, isVeterenarian, price, img, speciality });
        }
      })
      .catch((error) => {
        this.setState({ error });
      })
  }

  handleClick = (e) => {
    this.setState({
      isVeterenarian: !this.state.isVeterenarian,
    })
  }

  render() {
    return (
      <div className='registration'>
        <div className='registration-title'>Регистрация</div>
        <div>Ваша почта*:</div>
        <input
          value={this.state.email}
          onChange={this.handleChange}
          type='email'
          name='email'
          className='login'
          placeholder="Почта"
        />
        <div>Пароль*:</div>
        <input
          value={this.state.password}
          onChange={this.handleChange}
          type='password' name='password'
          className='password'
          placeholder='Пароль'
        />
        {this.state.error ? <div className='error'>Проверьте правильность введенных вами данных!</div> : null}
        <div className="check">
          <input type='checkbox' value={false} onClick={this.handleClick} />
          {/* <div className="check-button">
            <Button onClick={this.handleClick} type='white' text='+' />

          </div> */}
          <span>
            {'Я ветеринар'}
          </span>
        </div>
        <br />
        {this.state.isVeterenarian && (
          <>
            <input
              className='login'
              value={this.state.phone}
              onChange={this.handleChange}
              type='number' name='phone'

              placeholder='Номер телефона'
            />
            <input
              className='login'
              value={this.state.price}
              onChange={this.handleChange}
              type='text' name='price'

              placeholder='Цена услуги'
            />
            <input
              className='login'
              value={this.state.img}
              onChange={this.handleChange}
              type='text' name='img'

              placeholder='URl на фото'
            />
            <input
              className='login'
              value={this.state.speciality}
              onChange={this.handleChange}
              type='text' name='speciality'

              placeholder='Специлизация'
            />
            <input
              className='login'
              value={this.state.name}
              onChange={this.handleChange}
              type='text' name='name'

              placeholder='Имя'
            />
          </>
        )}
        <Button onClick={this.signup} type='white' text='РЕГИСТРАЦИЯ' />
      </div>
    );
  }
}
export default Register;
