import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import DeckList from './components/DeckList';
import Deck from './components/Deck';
import CreateDeck from './components/CreateDeck';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';

import NavigationService from './NavigationService';

import store from './store';

const Navigator = createStackNavigator({
  Home: {
    screen: DeckList,
  },
  Deck,
  CreateDeck,
  AddCard,
  Quiz,
});

const App = () => {
  return (
    <Provider store={store}>
      <Navigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
