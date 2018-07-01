import { Action, Reducer } from 'redux';

import { Hash } from '../utils';

export type Deck = {
  id: string;
  title: string;
  questions: {}[];
};

const DEFAULT_STATE: Hash<Deck> = {};

const reducer: Reducer<Hash<Deck>> = (
  state = DEFAULT_STATE,
  action: Action<string>
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
