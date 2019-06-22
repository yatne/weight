import React from 'react';

import Chart from '../common/Chart';
import NewWeightSection from './NewWeightSection';
import WeightsList from '../common/WeightsList';
import { fetchThisMonthsWeights } from '../../modules/api/weightApi';
import style from './mainDashboard.scss';

class MainDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: [],
    };
  }

  componentDidMount() {
    fetchThisMonthsWeights()
      .then(weights => this.setState({ weights }));
  }

  render() {
    return (
      <div className={style.dashboard}>
        <section className={style.leftColumn}>
          <NewWeightSection />
          <WeightsList weights={this.state.weights} />
        </section>
        <section className={style.rightColumn}>
          <Chart weights={this.state.weights} />
        </section>
      </div>
    );
  }
}

export default MainDashboard;
