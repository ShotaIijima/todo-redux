import React, { Component } from 'react'

export default class MsgBoard extends Component {
    render() {
        return (
            <div style={{color: this.props.color}}>{this.props.msg}</div>
        )
    }
}