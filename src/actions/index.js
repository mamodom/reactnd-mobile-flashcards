import storage from '../storage';

export const fetchDecks = () => {
  return dispatch => {
    return storage.fetchDecks().then(decks => {
      const action = decksFetched(decks);

      return dispatch(action);
    });
  };
};

const decksFetched = decks => {
  return { type: 'decks.fetched', decks };
};
