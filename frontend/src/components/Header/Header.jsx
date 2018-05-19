import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
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
  </div>
);

export default Header;
