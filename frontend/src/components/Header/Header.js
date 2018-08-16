import React from 'react';
import { Link } from 'react-router-dom';

import style from './header.scss';

const Header = () => (
  <header className={style.header}>
    <div className={style.headerContent}>
      <div className={style.headerTitle}>
        GRUBOŚĆ
      </div>
      <div className="header-menu">
        <ul className={style.menu}>
          <li className={style.menuItem}>
            <Link className={style.menuLink} to="/main">Main</Link>
          </li>
          <li className={style.menuItem}>
            <Link className={style.menuLink} to="/report">Report</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
