/*
import React from 'react';

export default class Consume8080 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
          <div>
            <h2>Data from WS-8080 (./components/consume8080.js)</h2>
            Hello, 8080.
          </div>
        );
    }
}
*/

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Consume8080 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error:   null, error1:   null, error2:   null,
      id1: 'default', content1: 'default', id2: 'default', content2: 'default'
    };
  }

  componentDidMount() {

  // Consumming Traditional Spring REST on WS server: project SBG60rest
  console.log('Consumming Traditional Spring REST - CO');
  axios.get('http://localhost:8080/controllerA')
    .then(g1 => {
        this.setState({ id1: g1.data.id, content1: g1.data.content });
        console.log('Consumming Traditional Spring REST ctl-A: ' + this.state.content1);
    })
     .catch(err => {
      // Something went wrong. Save the error in state and re-render.
      this.setState({
        loading1: false,
        error1: " (" + err + ")"
      });
      console.log('Consumming Traditional Spring REST ctl-A error: '+ this.state.error1);
    });
  console.log('Consumming Traditional Spring REST - No CO');
  axios.get('http://localhost:8080/controllerB')
    .then(g2 => {
        this.setState({ id2: g2.data.id, content2: g2.data.content });
        console.log('Consumming Traditional Spring REST ctl-B: ' + this.state.content2);
    })
     .catch(err => {
      // Something went wrong. Save the error in state and re-render.
      this.setState({
        loading2: false,
        error2: " (" + err + ")"
      });
      console.log('Consumming Traditional Spring REST ctl-B error: '+ this.state.error2);
    });

    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        const posts = res.data.data.children.map(obj => obj.data);

        // Update state to trigger a re-render.
        // Clear any errors, and turn off the loading indiciator.
        this.setState({
          posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        // Something went wrong. Save the error in state and re-render.
        this.setState({
          loading: false,
          error: err
        });
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
      <h3>with axios, consuming WS 8080 (Traditional Spring REST on SBG60rest)</h3>
      Controller A: {"ID: " + this.state.id1 + ", Content: " + this.state.content1 + this.state.error1} <br />
      Controller B: {"ID: " + this.state.id2 + ", Content: " + this.state.content2 + this.state.error2}
      </div>
    );
  }
}
