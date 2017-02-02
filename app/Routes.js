import React from 'react';

export const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Nav = () => (
  <div>
    [<IndexLink activeClassName='active' to='/'>Home</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to='/address'>Address</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to='/about'>About</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to={{ pathname: '/address/query', query: { message: 'Hello from Route Query' } }}>Route Query</IndexLink>]
  </div>
)

