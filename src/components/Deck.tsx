import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

type DeckProps = { navigation: NavigationScreenProp<{}> };

class Deck extends Component<DeckProps> {
  static navigationOptions: (props: DeckProps) => any = ({ navigation }) => {
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
