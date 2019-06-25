import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { DateInput, NumInput } from '../common/Input';
import Button from '../common/Button';
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
    const { onSubmit } = this.props;
    const {
      date,
      weight,
    } = this.state;
    return (
      <div className={style.newWeightSection}>
        <form className={style.newWeightForm}>
          <DateInput onChange={value => this.setState({ date: value })} value={date} name="date" label="Data" />
          <NumInput
            onChange={value => this.setState({ weight: value })}
            value={weight}
            name="weight"
            label="Waga"
            step="0.1"
          />
          <Button onClick={() => onSubmit(date, weight)}>Dodaj</Button>
        </form>
      </div>
    );
  }
}

NewWeightSection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewWeightSection;
