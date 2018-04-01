import { combineReducers } from 'redux'
import todo_list from './todo_list'
import validation from './validation'

const todoApp = combineReducers({
    todo_list,
    validation
})

export default todoApp