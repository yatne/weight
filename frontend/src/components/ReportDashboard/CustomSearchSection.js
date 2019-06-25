import React from 'react';
import moment from 'moment/moment';
import PropTypes from 'prop-types';

import style from './customSearchSection.scss';
import { DateInput } from '../common/Input';
import Button from '../common/Button';

const radioOptions = [
  { value: 'month', label: 'miesiac' },
  { value: 'quarter', label: 'kwartał' },
  { value: 'year', label: 'rok' },
  { value: 'alltime', label: 'całość' },
  { value: 'custom', label: 'zakres:' },
];

class CustomSearchSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenOption: 'quarter',
      dateFrom: moment().subtract(7, 'd').format('YYYY-MM-DD'),
      dateTo: moment().format('YYYY-MM-DD'),
    };
  }

  componentDidMount() {
    this.props.onSearch(moment().startOf('quarter').format('YYYY-MM-DD'));
  }

  onSearchClicked() {
    const { onSearch } = this.props;
    const { chosenOption, dateFrom, dateTo } = this.state;

    switch (chosenOption) {
      case 'month':
        onSearch(moment().startOf('month').format('YYYY-MM-DD'));
        break;
      case 'quarter':
        onSearch(moment().startOf('quarter').format('YYYY-MM-DD'));
        break;
      case 'year':
        onSearch(moment().startOf('year').format('YYYY-MM-DD'));
        break;
      case 'alltime':
        onSearch(dateFrom, dateTo, true);
        break;
      case 'custom':
        onSearch(dateFrom, dateTo);
        break;
      default:
        break;
    }
  }

  render() {
    const { chosenOption, dateFrom, dateTo } = this.state;
    return (
      <form className={style.customSearchContainer}>
        {radioOptions.map(option => (
          <label
            key={option.value}
            className={style.customSearchRadioOption}
            htmlFor={option.value}
          >
            <input
              id={option.value}
              type="radio"
              name="period"
              value={option.value}
              checked={option.value === chosenOption}
              onChange={e => this.setState({ chosenOption: e.currentTarget.value })}
            />
            {option.label}
          </label>
        ))}
        <DateInput
          value={dateFrom}
          name="dateFrom"
          label="od"
          disabled={chosenOption !== 'custom'}
          onChange={value => this.setState({ dateFrom: value })}
        />
        <DateInput
          value={dateTo}
          name="dateTo"
          label="do"
          disabled={chosenOption !== 'custom'}
          onChange={value => this.setState({ dateTo: value })}
        />
        <Button onClick={() => this.onSearchClicked()}>
          Szukaj
        </Button>
      </form>
    );
  }
}

CustomSearchSection.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default CustomSearchSection;
