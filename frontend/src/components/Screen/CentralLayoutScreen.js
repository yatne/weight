/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import style from './centralLayoutScreen.scss';

const CentralLayoutScreen = props => (
  <div className="app">
    <Header />
    <div className={style.centralLayout}>
      {props.children}
    </div>
  </div>
);

CentralLayoutScreen.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CentralLayoutScreen;
