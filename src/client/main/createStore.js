import { createStore } from 'redux';
import { Map } from 'immutable';
import { combineReducers } from 'redux-immutable';

export default ({
  reducers = {},
  state = Map(),
}) => createStore(
  combineReducers(reducers),
  state,
);
