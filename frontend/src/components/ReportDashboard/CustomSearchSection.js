import React from 'react';
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
    };
  }

  render() {
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
              checked={option.value === this.state.chosenOption}
              onChange={e => this.setState({ chosenOption: e.currentTarget.value })}
            />
            {option.label}
          </label>
        ))}
        <DateInput />
        <DateInput />
        <Button onClick={() => console.log('button')}>
          Szukaj
        </Button>
      </form>
    );
  }
}


export default CustomSearchSection;
