import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
// CSS Styling
import './App.css';
// Components
import Categorical from './vizes/categorical';
import Quantitative from './vizes/quantitative';

const App = (
  <Router>
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">Categorical</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/">Quantitative</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Categorical} />
          <Route path="/" component={Quantitative} />
        </Switch>
      </div>
  </Router>
);

export default App;
