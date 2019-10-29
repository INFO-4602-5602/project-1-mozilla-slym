import React from 'react';
import './categorical.css';
import WorldMap from './worldMap';

class Categorical extends React.Component {
    render() {
      return (
        <div>
          <h1>Categorical graph</h1>
          <WorldMap data={[5, 10, 1, 3]} size={[500, 500]} />
        </div>
      )
    }
  }
  export default Categorical;  