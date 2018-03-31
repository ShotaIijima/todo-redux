import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input type="text" placeholder="タイトル"/><br/>
                    <textarea placeholder="詳細" rows="4"></textarea><br/>
                    <button type="submit">追加</button>
                </form>
            </div>
        )
    }
}