import React from 'react';

import WeightManagementPanel from './WeightManagementPanel';
import DefaultChartsPanel from './DefaultChartsPanel';

const MainDashboard = () => (
  <div className="'main-dashboard">
    <WeightManagementPanel />
    <DefaultChartsPanel />
  </div>
);

export default MainDashboard;
