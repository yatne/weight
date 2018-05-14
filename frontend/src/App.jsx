import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MainDashboardScreen from './components/MainDashboard/MainDashboardScreen';
import ReportDashboard from './components/ReportDashboard/ReportDashboard';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/main" component={MainDashboardScreen}/>
      <Route exact path="/report" component={ReportDashboard}/>
      <Route exact path="/" component={MainDashboardScreen}/>
    </div>
  </Router>
);

export default Routes;
