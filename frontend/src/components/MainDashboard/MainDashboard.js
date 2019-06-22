import React from 'react';

import Chart from '../common/Chart';
import NewWeightSection from './NewWeightSection';
import WeightsList from './WeightsList';
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
