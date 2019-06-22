import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import style from './chart.scss';

const Chart = (props) => {
  const { weights } = props;
  const labels = weights.flatMap(weight => weight.date);
  const data = weights.flatMap(weight => weight.weight);

  return (
    <article className={style.chartContainer}>
      <Line
        // redraw
        options={props.options}
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
    </article>
  );
};

Chart.propTypes = {
  weights: PropTypes.array.isRequired,
  options: PropTypes.object,
};

Chart.defaultProps = {
  options: {},
};

export default Chart;
