import storage from '../storage';
import types from './types';
import { back, navigate } from '../NavigationService';

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

export const createDeck = name => async (dispatch, getState) => {
  const {
    decks: { [name]: exists },
  } = getState();

  if (!!exists)
    return dispatch(
      deckCreationError(name, `A deck named ${name} already exists`)
    );

  dispatch(deckCreationSuccess(name));

  back();
  navigate('Deck', { key: name });

  await storage.addDeck(name);
};

deckCreationSuccess = name => ({
  type: types.decks.create.success,
  name,
});

const deckCreationError = (name, error) => ({
  // TODO: notify the user of this error
  type: types.decks.create.error,
  name,
});

export const addCard = ({ deckId, question, answer }) => async dispatch => {
  await storage.addCard({ deckId, question, answer });
  dispatch(addCardSuccess({ deckId, question, answer }));
  back();
};

const addCardSuccess = ({ deckId, question, answer }) => ({
  type: types.cards.create.success,
  deckId,
  question,
  answer,
});
