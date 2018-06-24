import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';

import DeckList from './components/DeckList';

export default createStackNavigator({
  Home: {
    screen: DeckList,
  },
});
