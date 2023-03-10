import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState
  )
}

export default configureStore