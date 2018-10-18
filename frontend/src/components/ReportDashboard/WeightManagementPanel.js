import React from 'react';
import PropTypes from 'prop-types';

import DateInput from '../common/Input';

class WeightManagementPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '2017-01-01',
      toDate: '2017-01-15',
    };
  }

  handleFromChange(value) {
    this.setState({
      fromDate: value,
    });
  }

  handleToChange(value) {
    this.setState({
      toDate: value,
    });
  }

  render() {
    const {
      fromDate,
      toDate,
    } = this.state;
    return (
      <div className="weight-management-panel">
        <DateInput name="from" value={fromDate} onChange={value => this.handleFromChange(value)} />
        <DateInput name="to" value={toDate} onChange={value => this.handleToChange(value)} />
        <button onClick={() => this.props.onSubmit(fromDate, toDate)}>Filter</button>
      </div>
    );
  }
}

WeightManagementPanel.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WeightManagementPanel;
