import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to ='/users'><a href="sass.html">user</a></Link></li>
            
            <li><Link to = '/users/create'> <a href="collapsible.html">create User</a></Link></li>
          </ul>
        </div>
      </nav>
    )
}

export { Header }
