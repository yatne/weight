import React from 'react';

import WeightManagementPanel from './WeightManagementPanel';
import DefaultChartsPanel from './DefaultChartsPanel';
import { fetchWeights } from '../../modules/api/weightApi';

class MainDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: null,
    };
  }

  getWeightsForDates(from, to) {
    fetchWeights(new Date(from), new Date(to))
      .then(weights => this.setState({ weights }));
  }

  render() {
    return (
      <div>
        <WeightManagementPanel onSubmit={(from, to) => this.getWeightsForDates(from, to)} />
        {!!this.state.weights && this.state.weights.map(weight => (<div>{weight.weight}</div>))}
        <DefaultChartsPanel />
      </div>
    );
  }
}

export default MainDashboard;
