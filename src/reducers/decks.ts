import { Action } from 'redux';

const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action: Action) => {
  console.log(action);
  return state;
};
