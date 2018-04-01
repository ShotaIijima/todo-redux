import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <ol>
              {
                  this.props.todo_list.map((todo) =>(
                  <Todo
                    key={todo.key}
                    title={todo.title}
                    desc={todo.desc}
                    done={todo.done}
                    toggleTodo={() => this.props.toggleTodo(todo.key, todo.done)}
                    deleteTodo={() => this.props.deleteTodo(todo.key)}
                  />
                  ))
              }
            </ol>
        )
    }
}