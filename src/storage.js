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

export default {
  fetchDecks,
  addDeck,
  addCard,
};
