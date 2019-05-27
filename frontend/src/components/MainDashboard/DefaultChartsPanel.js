import React from 'react';
import PropTypes from "prop-types";

import Chart from '../common/Chart';

const DefaultChartsPanel = (props) => {
  const labels = props.weights.flatMap(weight => weight.date);
  const data = props.weights.flatMap(weight => weight.weight);

  return (
    <Chart
      labels={labels}
      data={data}
    />
  );
};

DefaultChartsPanel.propTypes = {
  weights: PropTypes.array.isRequired,
};

export default DefaultChartsPanel;
