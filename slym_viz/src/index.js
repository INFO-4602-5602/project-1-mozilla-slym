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
        </ul>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Categorical} />
          <Route path="/viz2/quantitative.html"/>
        </Switch>
      </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));