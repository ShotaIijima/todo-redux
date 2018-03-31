import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <ol>
              {
                  this.props.todos.map((todo) =>(
                  <Todo
                    key={todo.key}
                    title={todo.title}
                    desc={todo.desc}
                    done={todo.done}
                    delTodo={() => this.props.delTodo(todo.key)}
                  />
                  ))
              }
            </ol>
        )
    }
}