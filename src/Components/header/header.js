import './header.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';

class Header extends React.Component {

    render() {
        const { isLoggedin, logout } = this.props;
        return (
            <div className='header'>
                <div className='logo'>
                    <Link to='/'>
                        <div className='project-name'>Ветклиника мечты</div>
                    </Link>
                </div>
                <div className='register'>
                    <Link to='/kabinet' className='btn-lk'>
                        {isLoggedin ? <Button text='Мои записи' type='header' /> : null}
                    </Link>
                    <Link to={isLoggedin ? '/' : '/authorization'}>
                        <Button text={isLoggedin ? 'ВЫЙТИ' : 'ВОЙТИ'} type='header' onClick={isLoggedin ? logout : () => { }} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
