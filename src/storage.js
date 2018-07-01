import { AsyncStorage } from 'react-native';

const fetchDecks = () => AsyncStorage.getItem('decks').then(JSON.parse);

export default {
  fetchDecks,
};
