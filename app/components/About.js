import React from 'react';

export const About = (props) => (
  <div>
    <h2>About Page (./components/About.js)</h2>
    <div><br />pass route parameters: 
    	 <br /> - try localhost:3011/#/about
    	 <br /> - try localhost:3011/#/about/blabla</div>
    { props.params.idCode && <h4>route parameter: idCode= {props.params.idCode}</h4>}
  </div>
)