import React, { Component } from 'react';

class TOC extends Component {
  render() {
    let list = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      list.push(<li key={data[i].id}>
        <a
          href={"/contents/" + data[i].id}
          data-id={data[i].id}
          onClick={function (id, num, e) {
            // debugger;   // debug에서 멈춤
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
          }.bind(this, data[i].id, 10)}
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