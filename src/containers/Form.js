import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.dispatch(addTodo(this.refs.title.value, this.refs.desc.value))}>
                <input type="text" ref={title} placeholder="タイトル"/><br/>
                <textarea placeholder="詳細" ref={desc} rows="4"></textarea><br/>
                <button type="submit">追加</button>
            </form>
        )
    }
}

Form = connect()(Form)

export default Form