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
    console.log(value);
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
        <DateInput name="from" value={this.state.fromDate} onChange={this.handleFromChange} />
        <DateInput name="to" value={this.state.toDate} onChange={this.handleToChange} />
        {`${this.state.fromDate}
${this.state.toDate}`}
      </div>
    );
  }
}
export default WeightManagementPanel;
