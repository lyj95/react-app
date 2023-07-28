import React, { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <div>
        <a href="" onClick={function (e) {
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}
        >{this.title}</a>
      </div >
    )
  }
}

export default Subject;