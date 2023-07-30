import React, { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState){
    console.log(newProps.data, this.props.data);
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
  render() {
    console.log('TOC!!')
    let list = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      list.push(<li key={data[i].id}>
        <a
          href={"/contents/" + data[i].id}
          data-id={data[i].id}
          onClick={function (e) {
            // debugger;   // debug에서 멈춤
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
            // this.props.onChangePage(id);
          }.bind(this)}
        >
          {data[i].title}
        </a>
      </li>);
      i++;
    }
    return (
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    )
  }
}

export default TOC;