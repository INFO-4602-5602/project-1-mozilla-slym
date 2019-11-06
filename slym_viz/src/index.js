import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
// CSS Styling
import './index.css';
// Components
import Categorical from './vizes/categorical';
import Quantitative from './vizes/quantitative';

const router = (
  <Router basename={"/project-1-mozilla-slym"}>
      <div className="navContainer">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">Categorical</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/quantitative">Quantitative</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/test">Test</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Categorical} />
          <Route path="/quantitative" component={Quantitative} />
          <Route path="/test" render={() => {window.location.href="/viz2/quantitative.html"}} />
        </Switch>
      </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));