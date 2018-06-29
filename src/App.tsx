import React from 'react';
import {
  createStackNavigator,
  NavigationContainerComponent,
} from 'react-navigation';

import NavigationService from './NavigationService';

import DeckList from './components/DeckList';
import Deck from './components/Deck';

const Navigator = createStackNavigator({
  Home: {
    screen: DeckList,
  },
  Deck: {
    screen: Deck,
  },
});

const App = () => {
  return (
    <Navigator
      ref={(navigatorRef: NavigationContainerComponent) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default App;
