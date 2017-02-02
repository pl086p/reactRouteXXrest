/*
import React from 'react';

export default class Consume8090 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
          <div>
            <h2>Data from WS-8090 (./components/consume8090.js)</h2>
            Hello, 8090.
          </div>
        );
    }
}
*/

/*
curl -i -X POST -H "Content-Type:application/json" -d '{  "firstName" : "F01",  "lastName" : "L01" }'    http://localhost:8090/people
*/


import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Consume8090 extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    posts: [],
    loading: true,
    error: null,
    fname1: 'F0001', lname1: 'L0001', fname2: 'F0002', lname2: 'L0002',
    id1: 'default',
    content1: 'default',
    id2: 'default',
    content2: 'default'
  };
}

componentDidMount() {

  // Consumming Spring Data REST from WS server: project SBG71restJPA
  console.log('Consumming Spring Data REST - with axios');


  axios.get('http://localhost:8090/people/1')
    .then(p => {
        this.setState({ fname1: p.data.firstName, lname1: p.data.lastName });
        console.log('Consumming Spring Data REST with axios: ' + this.state.fname1);
    })
    .catch(err => {
      // Something went wrong. Save the error in state and re-render.
      this.setState({
        loading: false,
        error: err
      });
      console.log('Consumming Spring Data REST error: '+ this.state.error);
    });

  axios.get('http://localhost:8090/people/2')
    .then(p => {
        this.setState({ fname2: p.data.firstName, lname2: p.data.lastName });
        console.log('Consumming Spring Data REST with axios: ' + this.state.fname2);
    })
    .catch(err => {
      // Something went wrong. Save the error in state and re-render.
      this.setState({
        loading: false,
        error: err
      });
      console.log('Consumming Spring Data REST error: '+ this.state.error);
    });

}

renderLoading() {
  return <div>Loading...</div>;
}

renderError() {
  return (
    <div>
      Uh oh: {this.state.error.message}
    </div>
  );
}

renderPosts() {
  if(this.state.error) {
    return this.renderError();
  }

  return (
    <ul>
      {this.state.posts.map(post =>
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );
}

render() {
  return (
    <div>
    <h3>with axios, consuming WS 8090 (Spring Data REST on SBG71restJPA)</h3>
    person 1: {this.state.lname1 + ", " + this.state.fname1} <br />
    person 2: {this.state.lname2 + ", " + this.state.fname2}
    </div>
  );
}
}
