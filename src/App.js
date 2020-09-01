import React from 'react';
import './App.css';
import TodoList from './TodoList'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(properties) {
    super(properties);
    this.state = {
      todoItems: [],
      currentTodoItem: {
        text: '',
        key: ''
      }
    }
    this.checkItem = this.checkItem.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.checkTodoItem = this.checkTodoItem.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="fractal-todo" onSubmit={this.addTodoItem}>
            <input type="text" placeholder="Grab your TODO" value={this.state.currentTodoItem.text}
              onChange={this.checkItem}></input>
            <button type="submit">Add</button>
          </form>
        </header>

        <TodoList todoItems={this.state.todoItems}
          deleteTodoItem={this.deleteTodoItem}
          updateItem={this.updateItem}
          checkTodoItem={this.checkTodoItem}
        ></TodoList>
      </div>

    );
  }

  checkItem(event) {
    this.setState({
      currentTodoItem: {
        text: event.target.value,
        key: Date.now()
      }
    })
  }

  addTodoItem(event) {
    event.preventDefault();
    const newTodoItem = this.state.currentTodoItem;
    if (newTodoItem.text !== "") {
      const newTodoItems = [...this.state.todoItems, newTodoItem];
      this.setState({
        todoItems: newTodoItems,
        currentTodoItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteTodoItem(key) {
    const filteredTodoItems = this.state.todoItems.filter(todoItem =>
      todoItem.key !== key);
    this.setState({
      todoItems: filteredTodoItems
    })

  }

  updateItem(text, key) {
    const todoItems = this.state.todoItems;
    todoItems.map(todoItem => {
      if (todoItem.key === key) {
        todoItem.text = text;
      }
    })
    this.setState({
      todoItems: todoItems
    })
  }

  checkTodoItem(checked, key, text) {
    const todoItems = this.state.todoItems;
    todoItems.map(todoItem => {
      if (todoItem.key === key) {
        if (checked === true) {
          console.log(todoItem);
        }
      }
    })
  }

}
export default App;
