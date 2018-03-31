import React, { Component } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import MsgBoard from './MsgBoard'
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            err_msg: null,
            success_msg: null
        }
    }
  
    handleSubmit(e) {
        e.preventDefault()
        this.setState({ err_msg: null, success_msg: null })
        const title = e.target.elements[0].value
        if (!title) {
            this.setState({ err_msg: 'タイトルを入力してください' })
            return
        }
        const desc = e.target.elements[1].value
        const new_todo = {
            key: this.state.todos.length + 1,
            title: title,
            desc: desc,
            done: null
        }
        this.setState({
            todos: this.state.todos.concat(new_todo),
            success_msg: `${title}を追加しました`
        })
        e.target.elements[0].value = ''
        e.target.elements[1].value = ''
    }

    delTodo = (key) => {
        this.setState({
            todos: this.state.todos.filter(todo => (todo.key !== key))
        })
    }
  
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