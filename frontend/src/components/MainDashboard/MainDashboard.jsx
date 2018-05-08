"use strict";

import React from 'react';

import WeightManagementPanel from './WeightManagementPanel';
import DefaultChartsPanel from './DefaultChartsPanel';

class MainDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weights: null,
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='main-dashboard'>
        <WeightManagementPanel/>
        <DefaultChartsPanel/>
      </div>
    );
  }
}

export default MainDashboard;
