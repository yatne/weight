"use strict";

import React from 'react';
import _ from 'lodash';
import Navigation from './components/Navigation';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weights: null,
    }
  }

  componentDidMount() {
    fetch('http://pi:8080/weights')
      .then(res => res.json())
      .then(res => this.setState({ weights: res }));
  }

  render() {
    return (
      <div className='App'>
        <Navigation/>
        <div>
          <h1>It Works! pupa</h1>
          <p>This React project just works including <span>css-module</span> local styles.</p>
          <p>
            {_.map(this.state.weights, weight =>
              (<p>{weight.weight}</p>))}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
