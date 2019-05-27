import React from 'react';

import DefaultChartsPanel from './DefaultChartsPanel';
import NewWeightSection from './NewWeightSection';
import WeightsTable from './WeightsTable';
import { fetchThisMonthsWeights } from '../../modules/api/weightApi';

class MainDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: [],
    };
  }

  getThisMonthsDates() {
    fetchThisMonthsWeights()
      .then(weights => this.setState({ weights }));
  }

  componentDidMount() {
    this.getThisMonthsDates();
  }

  render() {
    return (
      <React.Fragment>
        <NewWeightSection />
        <DefaultChartsPanel weights={this.state.weights} />
        <WeightsTable weights={this.state.weights} />
      </React.Fragment>
    );
  }
}

export default MainDashboard;
