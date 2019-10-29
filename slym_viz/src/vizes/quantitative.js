import React from 'react';
import './quantitative.css';
import BarChart from './barChart'

class Quantitative extends React.Component {
  render() {
    return (
      <div>
        <h1>Quantitative graph</h1>
        <BarChart data={[5, 10, 1, 3]} size={[500, 500]} />
      </div>
    )
  }
}

export default Quantitative;
