import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/main">Main</Link></li>
      <li><Link to="/report">Report</Link></li>
    </ul>
  </div>
);

export default Navigation;
