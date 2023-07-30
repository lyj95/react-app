import './App.css';
import { Component } from 'react';
import Subject from './compoents/Subject';
import ReadContent from './compoents/ReadContent';
import CreateContent from './compoents/CreateContent';
import TOC from './compoents/TOC';
import Control from './compoents/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
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
    let _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      let i = 0;
      while(i < this.state.content[i].id){
        let data = this.state.content[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
          break;
        }
        i = i +1;
      }
    } else if (this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;

        // state 값을 변경할 땐 복제본을 변경하는 것이 좋다 !?
        // const _content = this.state.content.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // )

        let newContent = Array.from(this.state.content);
        newContent.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          // content: _content
          content: newContent
        })
      }.bind(this)}></CreateContent>
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
        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    )
  }
}

export default App;
