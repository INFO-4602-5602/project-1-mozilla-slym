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
  <Router basename={"/INFO-4602-5602/project-1-mozilla-slym"}>
      <div className="navContainer">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">Categorical</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/quantitative">Quantitative</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Categorical} />
          <Route path="/quantitative" component={Quantitative} />
        </Switch>
      </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));