import merge from 'lodash/object/merge'
import * as types from '../actions'
import { combineReducers } from 'redux'



function entities(state = { test: null }, action) {
	if (action.entities) {
	  return merge({}, state, action.entities)
	}
	return state
}

const rootReducer = combineReducers({
	entities,
})
export default rootReducer

