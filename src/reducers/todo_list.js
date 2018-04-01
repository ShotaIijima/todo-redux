import TodoList from '../models/TodoList'

const todo_list = (state = new TodoList(), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.addTodo(action)

    case 'TOGGLE_TODO':
      return state.toggleTodo(action)

    case 'DELETE_TODO':
      return state.deleteTodo(action)

    default:
      return state
  }
}

export default todo_list