import React, { Component } from 'react';
import './index.scss';

class Button extends Component {
    render() {
        const {label, onClick} = this.props;

        return (
            <button className='button' onClick={onClick}>
                <span className='button__label'>{ label }</span>
            </button>
        )
    }
}

Button.defaultProps = {
    label: '',
}

export default Button;