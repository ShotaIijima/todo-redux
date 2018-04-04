import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, deleteTodo } from '../actions'

const mapStateToProps = state => {
    return {
        todo_list: state.todo_list.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (key, done) => dispatch(toggleTodo(key, done)),
        deleteTodo: key => dispatch(deleteTodo(key))
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoList