import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends React.Component {
  render() {

    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // if (!isNull(this.props.promptType)) {
    //   //error, success, confirmation, info

    // }

    return (
      <div className="backdrop">
        <div className="modal">
          <div className="icon-tick">
            icon
          </div>
          <h1 className="heading">{this.props.heading}</h1>
          <p className="content">{this.props.content}</p>
          <button className="button" onClick={this.props.onClose}>
            {this.props.btnText}
          </button>
        </div>
      </div>
    );
  }


}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default Modal;
