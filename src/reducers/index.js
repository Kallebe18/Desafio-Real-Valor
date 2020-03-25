import { optionsReducer } from './optionsReducer.js';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  optionsState: optionsReducer,
})