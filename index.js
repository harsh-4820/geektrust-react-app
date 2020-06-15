import React, { Component } from 'react';
import { render } from 'react-dom';
import Planets from './Planets';
import './style.css';

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
        <h1>Finding Falcone!</h1>
        <h2>Select Planets you want to search in:</h2>
        <Planets  />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
