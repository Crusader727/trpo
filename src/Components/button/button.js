import './button.css';

import React from 'react';

class Button extends React.Component {
    render() {
        const {text, onClick, type} = this.props;
        return (
            <button onClick={onClick} className={'button-' + type}>{text}</button>
        )
    }
}

export default Button;