import { createStackNavigator } from 'react-navigation';

import DeckList from './components/DeckList';
import Deck from './components/Deck';

export default createStackNavigator({
  Home: {
    screen: DeckList,
  },
  Deck: {
    screen: Deck,
  },
});
