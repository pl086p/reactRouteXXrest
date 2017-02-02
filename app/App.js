import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

import * as comNavbar from './components/Navbar';
const NavMenu = comNavbar.Navbar;

import * as comAbout from './components/About';
const About = comAbout.About;

import * as comHome from './components/Home';
const Home = comHome.Home;

//import * as consumeRest from './components/ConsumeRest';
//const Flight = consumeRest.Flight;

const Flight = (props) => <div>
  <br />
  <h1>Consume RESTful Web Services</h1>
  [<Link to='/flight/consume8080'>WS 8080</Link>]&nbsp;
  [<Link to='/flight/consume8090'>WS 8090</Link>]
  {props.children}
</div>

// import * as consume8080 from './components/consume8080';
// const Consume8080 = consume8080.Consume8080;
import Consume8080 from './components/consume8080';

// import * as consume8090 from './components/consume8090';
// const Consume8090 = consume8090.Consume8090;
import Consume8090 from './components/consume8090';

// import * as routes from './Routes';
// const Container = routes.Container;

const NotFound = () => <h1>404: This page is not found!</h1>;

export default class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/flight' component={Flight}>
            <IndexRoute component={Consume8080} />
            <Route path='consume8080' component={Consume8080} />
            <Route path='consume8090' component={Consume8090} />
            <Route path='query' component={Query} />
          </Route>

          <Route path='/about(/:idCode)' component={About} />
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Query = (props) => (
  <h2>{props.location.query.message}</h2>
)

const Title = () => (
  <h1>Hello from Title Component</h1>
)

const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)

const NamedComponents = (props) => (
	<div>
    {props.title}<br />
    {props.subTitle}
	</div>
)


const Nav = () => (
  <div>
    [<IndexLink activeClassName='active' to='/'>Home</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to='/flight'>Consume REST</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to='/about'>About</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink>]&nbsp;
    [<IndexLink activeClassName='active' to={{ pathname: '/flight/query', query: { message: 'Hello from Route Query' } }}>Route Query</IndexLink>]
  </div>
)

const Container = (props) => <div>
  <Nav /><br />
  {props.children}
</div>

/*
const Flight = (props) => <div>
  <br />
  <h1>We are located at Oacton, VA</h1>
  [<Link to='/flight/consume8080'>WS 8080</Link>]&nbsp;
  [<Link to='/flight/consume8090'>WS 8090</Link>]
  {props.children}
</div>
*/
