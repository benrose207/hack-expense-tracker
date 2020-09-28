import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <header>
      <nav>
        <Link to="/">Bean Counter</Link>
        <ul className="user-links">
          <li><Link to="/accounts">My Accounts</Link></li>
          <li><Link to="/categories">My Categories</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
