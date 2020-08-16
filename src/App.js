import React, { Component } from 'react';
import First from './LandingPage'
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  state = {
    text: ""
  };

  render() {
    return (
      <div>
        <input
          onChange={ e => this.setState({ text: e.target.value }) }
          value={ this.state.text }
        />
        <br />
        <h1>{ this.state.text }</h1>
      </div>
    );
  }
}


export default App;
