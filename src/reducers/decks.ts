import { AnyAction, Reducer } from 'redux';

import { Hash } from '../utils';

export type Deck = {
  id: string;
  title: string;
  questions: {}[];
};

const DEFAULT_STATE: Hash<Deck> = {};

const reducer: Reducer<Hash<Deck>> = (
  state = DEFAULT_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case 'decks.fetched':
      return action.decks;
    default:
      return state;
  }
};

export default reducer;
