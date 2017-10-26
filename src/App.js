import React, { Component } from 'react';
import Input from './components/input/Input';
import List from './components/list/List';
import './App.css';

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     incomplete: []
  //   }
  //   this.newToDo = this.newToDo.bind(this)
  // }

  render() {
    return (
      <div>
        <Input addToDo={this.newToDo}/>
        <List />
      </div>
    );
  }
}

export default App;


// incomplete={this.state.incomplete}