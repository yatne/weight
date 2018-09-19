import React from 'react';

import WeightManagementPanel from './WeightManagementPanel';
import DefaultChartsPanel from './DefaultChartsPanel';
import DateInput from '../common/DateInput';
import { fetchWeights } from '../../modules/api/weightApi';

class MainDashboard extends React.Component {
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
      <div>
        {!!this.state.weights && this.state.weights.map(weight => (<div>{weight.weight}</div>))}
        <WeightManagementPanel />
        <DefaultChartsPanel />
        <DateInput />
      </div>
    );
  }
}

export default MainDashboard;
