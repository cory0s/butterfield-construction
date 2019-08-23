import React from 'react';
import './nav.scss';
import { Link } from 'gatsby'

const Nav = props => {    
    return(
      <nav>
        <div className="links">
          <Link to="company">Company</ Link>
          <Link to="team">Team</ Link>
          <Link to="portfolio">Portfolio</ Link>
        </div>
      </nav>
    )
}

export default Nav;