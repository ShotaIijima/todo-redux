import { Record } from 'immutable'

const TodoRecord = Record({
    key: null,
    title: '',
    desc: '',
    done: null
})

export default class Todo extends TodoRecord {
}