import { AsyncStorage } from 'react-native';

const fetchDecks = () => AsyncStorage.getItem('decks').then(JSON.parse);

const addDeck = name => {
  fetchDecks().then(decks => {
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

const addCard = ({ deckId, question, answer }) => {
  fetchDecks().then(decks => {
    AsyncStorage.setItem(
      'decks',
      JSON.stringify({
        ...decks,
        [deckId]: {
          id: deckId,
          title: decks[deckId].title,
          questions: [
            ...decks[deckId].questions,
            {
              question,
              answer,
            },
          ],
        },
      })
    );
  });
};

const getNextNotification = () =>
  AsyncStorage.getItem('nextNotification').then(JSON.parse);

const setNextNotification = ({ id, time }) =>
  AsyncStorage.setItem('nextNotification', JSON.stringify({ id, time }));

export default {
  fetchDecks,
  addDeck,
  addCard,
  getNextNotification,
  setNextNotification,
};
