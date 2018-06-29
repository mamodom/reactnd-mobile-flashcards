import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

class Deck extends Component<{ navigation: NavigationScreenProp<{}> }> {
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationScreenProp<{}>;
  }) => {
    return {
      title: navigation.getParam('key'),
    };
  };

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Text>{this.props.navigation.getParam('key')}</Text>
      </View>
    );
  }
}

export default Deck;
