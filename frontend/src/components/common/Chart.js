import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

import style from './chart.scss';

const Chart = (props) => {
  const { labels, data, name } = props;
  return (
    <div className={style.chartContainer}>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: name,
              data,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              spanGaps: true,
            },
          ],
        }}
      />
    </div>
  );
};

Chart.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string,
};

Chart.defaultProps = {
  name: 'Grubość',
};

export default Chart;
