import { combineReducers } from 'redux'
import user from './user'
import asset from './asset'
import category from './category'
import assignment from './assignment'
import cart from './cart'
import checkout from './checkout'

const rootReducer = combineReducers({ user, asset, category, assignment, cart, checkout });

export default rootReducer;
