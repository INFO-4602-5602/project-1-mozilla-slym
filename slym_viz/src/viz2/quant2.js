import React from 'react';
var __html = require('./quantitative.html');
var template = { __html: __html };

class Quantitative extends React.Component {
    render() {
      return(
        <div dangerouslySetInnerHTML={template} />
      );
    }
  }
  
  export default Quantitative;
  