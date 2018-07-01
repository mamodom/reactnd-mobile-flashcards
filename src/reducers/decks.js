const DEFAULT_STATE = {};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'decks.fetched':
      return action.decks || DEFAULT_STATE;
    default:
      return state;
  }
};

export default reducer;
