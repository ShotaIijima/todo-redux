import Validation from "../models/Validation";

const validation = (state = new Validation(), action) => {
    switch (action.type) {
        case 'ERR_MSG':
            return state.createErrMsg(action)

        case 'ADD_TODO':
            return state.createSuccessMsg(action)

        default:
            return state
    }
}

export default validation