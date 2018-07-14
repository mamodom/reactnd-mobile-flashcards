import types from '../actions/types';

const DEFAULT_STATE = {};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.decks.fetched:
      return action.decks || DEFAULT_STATE;
    case types.decks.create.success:
      return {
        ...state,
        [action.name]: {
          id: action.name,
          title: action.name,
          questions: [],
        },
      };
    default:
      return state;
  }
};

export default reducer;
