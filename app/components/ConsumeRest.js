import React from 'react';

const Flight = (props) => <div>
  <br />
  <h1>We are located at Oacton, VA</h1>
  [<Link to='/flight/consume8080'>WS 8080</Link>]&nbsp;
  [<Link to='/flight/consume8090'>WS 8090</Link>]
  {props.children}
</div>
