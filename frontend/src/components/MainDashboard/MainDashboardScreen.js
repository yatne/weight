import React from 'react';
import fetch from 'isomorphic-fetch';

import Header from '../Header/Header';
import MainDashboard from './MainDashboard';

class MainDashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: null,
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.21:8080/weights')
      .then(res => res.json())
      .then(res => this.setState({ weights: res }));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="central-layout">
          {!!this.state.weights && this.state.weights.map(weight => (<div>{weight.weight}</div>))}
          <MainDashboard />
        </div>
      </div>
    );
  }
}

export default MainDashboardScreen;
