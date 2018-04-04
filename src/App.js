import React, { Component } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import MsgBoard from './MsgBoard'
import './App.css'

export default class App extends Component {
    render() {
        return (
          <div className='App'>
              <MsgBoard err_msg={this.state.err_msg} success_msg={this.state.success_msg} />
              <Form onSubmit={(e) => this.handleSubmit(e)} />
              <TodoList todos={this.state.todos} delTodo={(key) => this.delTodo(key)} />
          </div>
        )
    }
}