import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './components/modal/Modal';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    let heading = "Please note";
    let content = "The values you have entered as future targets will be deleted if you change the frequency of this promise.";
    let btnText = "Got It";
    let promptType = "error"; //error, success, confirmation, info
    let sticky = true;
    let iconPath = "./resources/icon-exclamation-circle.svg";
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.toggleModal}>
          Open the modal
        </button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Modal promptType={promptType} 
        iconPath={iconPath}
        btnText={btnText} 
        heading={heading} 
        content={content} 
        sticky={sticky}
        show={this.state.isOpen} 
        onClose={this.toggleModal}>
    </Modal>
      </div>

    );
  }
}

export default App;
