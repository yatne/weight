import React from 'react';
import Header from '../Header/Header';

export default function withCentralLayout(Screen) {
  return () => (
    <div className="app">
      <Header />
      <div className="central-layout">
        <Screen />
      </div>
    </div>
  );
}
