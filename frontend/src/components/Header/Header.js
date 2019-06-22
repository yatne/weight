import React from 'react';
import { Link } from 'react-router-dom';

import style from './header.scss';

const Header = () => (
  <header className={style.header}>
    <div className={style.headerContent}>
      <div className={style.headerTitle}>
        GRUBOŚĆ
      </div>
      <div>
        <ul className={style.menu}>
          <li className={style.menuItem}>
            <Link className={style.menuLink} to="/">Home</Link>
          </li>
          <li className={style.menuItem}>
            <Link className={style.menuLink} to="/report">Raport</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
