import React from 'react';

import Chart from '../common/Chart';

const DefaultChartsPanel = () => (
  <Chart
    labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}
    data={[12, 19, 3, null, 4, 3]}
  />
);

export default DefaultChartsPanel;
