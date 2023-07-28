import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        <div>
          <h1><a href="1.html">{this.props.title}</a></h1>
          {this.props.sub}
        </div>
      )
    }
  }

export default Subject;