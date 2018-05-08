"use strict";

import React from 'react';

import Header from '../Header/Header';
import MainDashboard from './MainDashboard';

class MainDashboardScreen extends React.Component {

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
      <div className='app'>
        <Header/>
        <div className="central-layout">
          <MainDashboard/>
        </div>
      </div>
    );
  }
}

export default MainDashboardScreen;
