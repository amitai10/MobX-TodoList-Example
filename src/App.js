import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Todos from './Todos';

class App extends Component {
  render() {
    return (
      <div>
        <TodoList todos={new Todos()}/>
      </div>
    );
  }
}

export default App;
