import './App.css';
import { Component } from 'react';
import Subject from './compoents/Subject'
import Content from './compoents/Content'
import TOC from './compoents/TOC'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      subject: { title: 'WEB', sub: "world wide web!" },
      welcome: { title: 'welcome', desc: 'hello react!' },
      content: [
        { id: 1, title: 'HTML', desc: 'hititi!!' },
        { id: 2, title: 'CSS', desc: '222hititi!!' },
        { id: 3, title: 'Java script', desc: '333hititi!!' }
      ]
    };
  }
  render() {
    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      let i = 0;
      while(i < this.state.content[i].id){
        let data = this.state.content[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i +1;
      }
    }
    return (
      <div className='App'>
        <Subject
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={function () {
            // alert('hititi');
            this.setState({ mode: 'welcome' });
          }.bind(this)} 
        ></Subject>
        <TOC
          onChangePage={function (id) {
            // alert('hi');
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data = {this.state.content}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
