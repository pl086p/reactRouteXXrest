import React from 'react';

export const Navbar = () => (
  <div>
    [<IndexLink activeClassName='active' to='/'>Home</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to='/about'>About</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>]&nbsp;
  </div>
)