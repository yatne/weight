import React from 'react';
import Header from '../Header/Header';
import style from './centralLayoutScreen.scss';

export default function withCentralLayout(Screen) {
  return () => (
    <div className="app">
      <Header />
      <div className={style.centralLayout}>
        <Screen />
      </div>
    </div>
  );
}
