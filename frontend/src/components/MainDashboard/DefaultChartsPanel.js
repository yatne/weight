import React from 'react';
import { Line } from 'react-chartjs-2';

const DefaultChartsPanel = () => (
  <div className="default-charts-panel">
    <Line data={{
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Grubość',
        data: [12, 19, 3, null, 4, 3],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        spanGaps: true,
      }],
    }
    }
    />
  </div>
);

export default DefaultChartsPanel;
