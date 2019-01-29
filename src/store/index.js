import { createStore, applyMiddleware } from 'redux'
// import Immutable from 'immutable'
import thunk from 'redux-thunk'
import reducers from './reducers'

// const initialState = Immutable.Map();

const store = createStore(reducers, applyMiddleware(thunk))

export default store