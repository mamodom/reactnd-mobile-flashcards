import { ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { State } from '../reducers';

import storage from '../storage';
import { Deck } from '../reducers/decks';

export const fetchDecks: ActionCreator<
  ThunkAction<Promise<any>, State, never, AnyAction>
> = () => {
  return dispatch => {
    return storage.fetchDecks().then(decks => {
      const action = decksFetched(decks);

      return dispatch(action);
    });
  };
};

const decksFetched = (decks: Deck[]) => {
  return { type: 'decks.fetched', decks };
};
