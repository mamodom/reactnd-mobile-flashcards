import { Deck } from './decks';
import { Hash } from '../utils';

export type State = {
  decks: Hash<Deck>;
};

export { default as decks } from './decks';
