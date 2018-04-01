export const addTodo = (title, desc) => {
    if(title != ''){
        return {
            type: 'ADD_TODO',
            title,
            desc
        }
    }else{
        return {
            type: 'ERR_MSG',
            msg: 'タイトルを入力して下さい'
        }
    }
}

export const toggleTodo = (key, done) => {
    return {
        type: 'TOGGLE_TODO',
        key,
        done
    }
}

export const deleteTodo = key => {
    return {
        type: 'DELETE_TODO',
        key
    }
}