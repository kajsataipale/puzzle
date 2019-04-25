import React, { Component } from 'react';
import './index.scss';

class Modal extends Component {
  render() {

    return (
      <div className="modal">
        <p className="modal__message">{this.props.message}</p>
      </div>
    );
  }
}

export default Modal;