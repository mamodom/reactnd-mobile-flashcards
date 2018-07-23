import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

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
      <PaperProvider>
        <Navigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </PaperProvider>
    </Provider>
  );
};

export default App;
