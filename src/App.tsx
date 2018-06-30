import React from 'react';
import {
  createStackNavigator,
  NavigationContainerComponent,
} from 'react-navigation';
import { Provider } from 'react-redux';

import DeckList from './components/DeckList';
import Deck from './components/Deck';

import NavigationService from './NavigationService';

import store from './store';

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
    <Provider store={store}>
      <Navigator
        ref={(navigatorRef: NavigationContainerComponent) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
