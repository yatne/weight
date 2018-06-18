import React from 'react';
import { Link } from 'react-router-dom';

import style from './header.scss';

const Header = () => (
  <header className={style.header}>
    <div className="header-title">
      GRUBOŚĆ
    </div>
    <div className="header-menu">
      <ul>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
