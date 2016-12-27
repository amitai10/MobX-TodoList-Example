import React, { Component } from 'react';
import _ from 'lodash';
import { observer } from 'mobx-react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      newItem: '',
    };

  }
  handleChange = (event) => {
    this.setState({newItem: event.target.value});
  }

  add = () => {
    if (this.state.newItem) {
      this.props.todos.add(this.state.newItem);
      this.setState({newItem: ''});
    }
  }

  render() {
    const {todos} = this.props;
    return (
      <div>
        <ul>
          {todos.items.map((t) => {
            return <li><a onClick={() => todos.delete(t)}>{t}</a></li>
          })}
        </ul>
        <button onClick={this.add}>Add to list</button>
        <input type="text" value={this.state.newItem} onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default observer(TodoList);
