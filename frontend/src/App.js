import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import ReportDashboard from './components/ReportDashboard/ReportDashboard';
import MainDashboard from './components/MainDashboard/MainDashboard';
import withCentralLayout from './components/Screen/withCentralLayout';

const Routes = () => (
  <Router basename="/weights">
    <div>
      <Route exact path="/report" component={withCentralLayout(ReportDashboard)} />
      <Route exact path="/" component={withCentralLayout(MainDashboard)} />
    </div>
  </Router>
);

export default Routes;
