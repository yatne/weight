"use strict";

import React from 'react';
import _ from 'lodash';
import Navigation from './components/Navigation';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import styles from "./app.sass"  // Css-module styles

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weights: null,
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/weights')
      .then(res => res.json())
      .then(res => this.setState({ weights: res }));
  }

  render() {
    return (
      <div className='App'>
        <Navigation/>
        <div>
          <h1>It Works! pupa</h1>
          <p>This React project just works including <span className={styles.redButton}>css-module</span> local styles.</p>
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
