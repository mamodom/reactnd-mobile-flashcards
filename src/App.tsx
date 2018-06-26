import { createStackNavigator } from 'react-navigation';

import DeckList from './components/DeckList';

export default createStackNavigator({
  Home: {
    screen: DeckList,
  },
});
