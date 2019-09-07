import React from 'react';

import Chart from '../common/Chart';
import NewWeightSection from './NewWeightSection';
import WeightsList from '../common/WeightsList';
import PasswordPopup from './PasswordPopup';
import { fetchThisMonthsWeights, addWeight } from '../../modules/api/weightApi';
import style from './mainDashboard.scss';

class MainDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weights: [],
      popupShown: false,
    };
  }

  componentDidMount() {
    fetchThisMonthsWeights()
      .then(weights => this.setState({ weights }));
  }

  handleNewWeightSubmission(date, weight) {
    const password = window.sessionStorage.getItem('password');
    if (password) {
      addWeight(date, weight, password)
        .then((res) => {
          if (!res.ok) {
            window.sessionStorage.clear();
          }
        })
        .then(() => fetchThisMonthsWeights())
        .then(weights => this.setState({ weights }));
    } else {
      this.setState({
        dateBeforePopup: date,
        weightBeforePopup: weight,
        popupShown: true,
      });
    }
  }

  passwordPopupClosed() {
    this.setState({ popupShown: false });
    this.handleNewWeightSubmission(this.state.dateBeforePopup, this.state.weightBeforePopup);
  }

  render() {
    const { popupShown } = this.state;
    return (
      <div className={style.dashboard}>
        <section className={style.leftColumn}>
          <NewWeightSection onSubmit={(date, weight) => this.handleNewWeightSubmission(date, weight)} />
          <WeightsList weights={this.state.weights} />
        </section>
        <section className={style.rightColumn}>
          <Chart weights={this.state.weights} />
        </section>
        {popupShown && <PasswordPopup onClose={() => this.passwordPopupClosed()} />}
      </div>
    );
  }
}

export default MainDashboard;
