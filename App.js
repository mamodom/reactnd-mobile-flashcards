import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';

import DeckList from './components/DeckList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: Constants.statusBarHeight }} />
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
