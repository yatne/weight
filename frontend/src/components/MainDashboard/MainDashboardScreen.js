import React from 'react';

import { fetchWeights } from '../../modules/api/weightApi';
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
    fetchWeights(new Date('2017-06-17'), new Date('2017-06-20'))
      .then(weights => this.setState({ weights }));
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
