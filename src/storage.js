import { AsyncStorage } from 'react-native';

const fetchDecks = () => AsyncStorage.getItem('decks').then(JSON.parse);

const addDeck = name => {
  AsyncStorage.getItem('decks')
    .then(JSON.parse)
    .then(decks => {
      AsyncStorage.setItem(
        'decks',
        JSON.stringify({
          ...decks,
          [name]: {
            id: name,
            title: name,
            questions: [],
          },
        })
      );
    });
};

export default {
  fetchDecks,
  addDeck,
};
