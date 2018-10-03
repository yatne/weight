import React from 'react';
import DateInput from '../common/DateInput';

class WeightManagementPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: '',
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
    return (
      <div className="weight-management-panel">
        <DateInput name="from" value={this.state.fromDate} onChange={value => this.handleFromChange(value)} />
        <DateInput name="to" value={this.state.toDate} onChange={value => this.handleToChange(value)} />
        {`${this.state.fromDate}
${this.state.toDate}`}
      </div>
    );
  }
}
export default WeightManagementPanel;
