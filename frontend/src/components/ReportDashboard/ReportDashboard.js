import React from 'react';

import Chart from '../common/Chart';
import CustomSearchSection from './CustomSearchSection';
import WeightsList from '../common/WeightsList';
import { fetchAllWeights, fetchWeights } from '../../modules/api/weightApi';
import style from './reportDashboard.scss';

const chartOptions = {
  elements: {
    point: {
      radius: 0,
    },
  },
  tooltips: {
    enabled: false,
  },
};

class ReportDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: [],
    };
  }

  componentDidMount() {
    // fetchAllWeights()
    //   .then(weights => this.setState({ weights }));
  }

  fetchWeights(dateFrom, dateTo, all = false) {
    if (all) {
      fetchAllWeights()
        .then(weights => this.setState({ weights }));
    } else {
      fetchWeights(dateFrom, dateTo)
        .then(weights => this.setState({ weights }));
    }
  }

  render() {
    return (
      <div className={style.dashboard}>
        <section className={style.leftColumn}>
          <CustomSearchSection onSearch={(dateFrom, dateTo, all) => this.fetchWeights(dateFrom, dateTo, all)} />
          <WeightsList weights={this.state.weights} />
        </section>
        <section className={style.rightColumn}>
          <Chart weights={this.state.weights} options={chartOptions} />
        </section>
      </div>
    );
  }
}

export default ReportDashboard;
