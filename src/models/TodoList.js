import { Record, List, Seq } from 'immutable'
import Todo from './Todo'
import moment from 'moment'

const TodoListRecord = Record({
    todoList: List(),
}, 'TodoListRecord')

export default class TodoList extends TodoListRecord {
    getNextKey(){
        if(this.todoList.size !== 0){
            return Seq(this.todoList).map(x => x.get('key')).max() + 1
        }else{
            return 1
        }
    }
    addTodo(action) {
        let new_todo = new Todo({
            key: this.getNextKey(),
            title: action.title,
            desc: action.desc,
        })
        return this.set('todoList', this.todoList.push(new_todo))
    }
    toggleTodo(action) {
        const todoList = this.todoList.map(todo =>
            todo.key === action.key ? todo.update('done', done => todo.done ? moment().format('YYYY-MM-DD HH:mm:ss') : null) : todo
        )
        return this.set('todoList', todoList)
    }
    deleteTodo(action) {
        const todoList = this.todoList.filter(todo => todo.key !== action.key)
        return this.set('todoList', todoList)
    }
}