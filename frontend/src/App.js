import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import ReportDashboard from './components/ReportDashboard/ReportDashboard';
import MainDashboard from './components/MainDashboard/MainDashboard';
import CentralLayoutScreen from './components/Screen/CentralLayoutScreen';

const Screen = () => (
  <CentralLayoutScreen><MainDashboard /></CentralLayoutScreen>
);

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/report" component={ReportDashboard} />
      <Route exact path="/" component={Screen} />
    </div>
  </Router>
);

export default Routes;
