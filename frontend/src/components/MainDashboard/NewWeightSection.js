import React from 'react';
import moment from 'moment';

import { DateInput, NumInput } from '../common/Input';
import { addWeight } from '../../modules/api/weightApi';
import style from './newWeightSection.scss';

class NewWeightSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('YYYY-MM-DD'),
      weight: undefined,
    };
  }

  render() {
    const {
      date,
      weight,
    } = this.state;
    return (
      <section className={style.newWeightSection}>
        <form className={style.newWeightForm}>
          <DateInput onChange={value => this.setState({ date: value })} value={date} name="date" />
          <NumInput onChange={value => this.setState({ weight: value })} value={weight} name="weight" step="0.1" />
          <button onClick={() => addWeight(date, weight)}>Add</button>
        </form>
      </section>
    );
  }
}

export default NewWeightSection;
