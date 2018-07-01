import { AsyncStorage } from 'react-native';
import { Deck } from './reducers/decks';

const fetchDecks: () => Promise<Deck[]> = () =>
  AsyncStorage.getItem('decks')
    .then(JSON.parse)
    .then(value => <Deck[]>value);

export default {
  fetchDecks,
};
