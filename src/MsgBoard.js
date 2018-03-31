import React, { Component } from 'react'

export default class MsgBoard extends Component {
    msg_board = () => {
        if(this.props.err_msg){
            return <div style={{color: 'red'}}>{this.props.err_msg}</div>
        }else if(this.props.success_msg){
            return <div style={{color: 'green'}}>{this.props.success_msg}</div>
        }else{
            return <div />
        }
    }

    render() {
        return (
          this.msg_board()
        )
    }
}