import React from 'react';

import DefaultChartsPanel from './DefaultChartsPanel';
import AddNewWeightSection from './AddNewWeightSection';
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
      <div>
        <AddNewWeightSection />
        {this.state.weights.map(weight => (<div>{weight.weight}</div>))}
        <DefaultChartsPanel />
      </div>
    );
  }
}

export default MainDashboard;
