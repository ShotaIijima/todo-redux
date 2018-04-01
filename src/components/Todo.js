import React, { Component } from 'react'
import moment from 'moment'

export default class Todo extends Component {
    render() {
        const link = this.props.done == null ? '完了' : '元に戻す'
        return (
          <li>
              <span>{this.props.title}</span>
              &nbsp;
              <button onClick={e => this.props.toggleTodo()}>{link}</button>
              {this.props.done != null &&
                  <div>
                  <button onClick={e => this.props.deleteTodo()}>削除</button>
                  <br/>
                  <p>終了時間:{this.props.done}</p>
                  </div>
              }
              <p>詳細:{this.props.desc}</p>
              <hr/>
          </li>
        )
    }
}