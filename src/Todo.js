import React, { Component } from 'react'
import moment from 'moment'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            done: this.props.done
        }
    }
  
    handleClick(e) {
        e.preventDefault()
        this.setState({
           done: this.state.done == null ? moment().format('YYYY-MM-DD HH:mm:ss') : null
        })
    }
  
    render() {
        const link = this.state.done == null ? '完了' : '元に戻す'
        return (
          <li>
              <span>{this.props.title}</span>
              &nbsp;
              <button onClick={e => this.handleClick(e)}>{link}</button>
              {this.state.done != null &&
                  <div>
                  <button onClick={this.props.delTodo}>削除</button>
                  <br/>
                  <p>終了時間:{this.state.done}</p>
                  </div>
              }
              <p>詳細:{this.props.desc}</p>
              <hr/>
          </li>
        )
    }
}