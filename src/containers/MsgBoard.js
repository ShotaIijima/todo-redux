import { connect } from 'react-redux'
import MsgBoard from '../components/MsgBoard'

const mapStateToProps = state => {
    return {
        msg: state.validation.msg,
        color: state.validation.color
    }
}

const MsgBoard = connect(
    mapStateToProps
)(MsgBoard)

export default MsgBoard