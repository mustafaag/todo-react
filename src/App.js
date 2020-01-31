import React, { Component } from 'react';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Do something'},
      {id: 2, content: 'Do something else'}
    ]
  }

  deleteTodo = (id) => {
    const leftTodo = this.state.todos.filter(todo =>{
      return todo.id !== id;
    });
    this.setState({
      todos : leftTodo
    })
  }
  render (){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's </h1>
        <Todos  todos={this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
    );
  }  
}

export default App;
