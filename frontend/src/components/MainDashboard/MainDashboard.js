import React from 'react';

import DefaultChartsPanel from './DefaultChartsPanel';
import NewWeightSection from './NewWeightSection';
import WeightsTable from './WeightsTable';
import { fetchThisMonthsWeights } from '../../modules/api/weightApi';
import style from './mainDashboard.scss';

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
      <div className={style.dashboard}>
        <section className={style.leftColumn}>
          <NewWeightSection />
          <WeightsTable weights={this.state.weights} />
        </section>
        <section className={style.rightColumn}>
          <DefaultChartsPanel weights={this.state.weights} />
        </section>
      </div>
    );
  }
}

export default MainDashboard;
