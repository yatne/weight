import React from 'react';

import DefaultChartsPanel from './DefaultChartsPanel';
import NewWeightSection from './NewWeightSection';
import WeightsTable from './WeightsTable';
import { fetchWeights } from '../../modules/api/weightApi';

class MainDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: [],
    };
  }

  getThisMonthsDates() {
    fetchWeights()
      .then(weights => this.setState({ weights }));
  }

  componentDidMount() {
    this.getThisMonthsDates();
  }

  render() {
    return (
      <React.Fragment>
        <NewWeightSection />
        <DefaultChartsPanel />
        <WeightsTable weights={this.state.weights} />
      </React.Fragment>
    );
  }
}

export default MainDashboard;
