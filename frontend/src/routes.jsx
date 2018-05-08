import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import MainDashboardScreen from './components/MainDashboard/MainDashboardScreen';
import ReportDashboard from './components/ReportDashboard/ReportDashboard';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/main" component={MainDashboardScreen}/>
      <Route path="/report" component={ReportDashboard}/>
    </div>
  </Router>
);

export default Routes;
