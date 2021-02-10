import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import currencyReducer from './Currency/reducers'
import productsReducer from './Products/reducers'

const rootReducer = combineReducers({
  currencyReducer,
  productsReducer,
})

const INITIAL_STATE = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
