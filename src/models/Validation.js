import { Record } from 'immutable'

const ValidationRecord = Record({
    msg: 'Todoを入力して下さい',
    color: 'green'
})

export default class Validation extends ValidationRecord {
    createErrMsg(action){
        return this.set('msg', action.msg).set('color', 'red')
    }

    createSuccessMsg(action){
        return this.set('msg', `${action.title}を追加しました`).set('color', 'green')
    }
}