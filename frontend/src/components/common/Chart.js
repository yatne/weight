import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const Chart = (props) => {
  const { weights } = props;
  const labels = weights.flatMap(weight => weight.date);
  const data = weights.flatMap(weight => weight.weight);

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: 'Grubość',
            data,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            spanGaps: true,
          },
        ],
      }}
    />
  );
};

Chart.propTypes = {
  weights: PropTypes.array.isRequired,
};

export default Chart;
