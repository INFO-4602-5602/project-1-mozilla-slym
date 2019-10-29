import React from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class Quantitative extends React.Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Quantitative graph</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia convallis vestibulum. Suspendisse maximus turpis dui, at fermentum lectus fringilla nec. Etiam ornare finibus felis, a placerat odio molestie vitae. Vestibulum vitae sapien at augue rutrum sagittis. Fusce ullamcorper accumsan blandit. Quisque convallis neque arcu. Phasellus elit lacus, pellentesque quis libero sed, pretium elementum mi. Quisque non ante quis turpis blandit hendrerit in eget felis. Nam eget tristique dolor, sed dapibus ligula.</p>
      </div>
    )
  }
}

export default Quantitative;  