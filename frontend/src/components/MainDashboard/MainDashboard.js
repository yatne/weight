import React from 'react';

import Chart from '../common/Chart';
import NewWeightSection from './NewWeightSection';
import WeightsList from '../common/WeightsList';
import { fetchThisMonthsWeights, addWeight } from '../../modules/api/weightApi';
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

  addNewWeight(date, weight) {
    addWeight(date, weight)
      .then(() => fetchThisMonthsWeights())
      .then(weights => this.setState({ weights }));
  }

  render() {
    return (
      <div className={style.dashboard}>
        <section className={style.leftColumn}>
          <NewWeightSection onSubmit={(date, weight) => this.addNewWeight(date, weight)} />
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
