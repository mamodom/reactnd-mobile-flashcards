import React, { Component, Fragment } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { FloatingAction } from 'react-native-floating-action';

import { navigate } from '../NavigationService';
class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key'),
    };
  };

  actions = [
    {
      icon: require('../images/add.png'),
      name: 'add_card',
      text: 'Add Card',
    },
  ];

  render() {
    const { id, questions } = this.props;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        {questions.length > 0 ? (
          <Text>There are no cards in this deck</Text>
        ) : (
          <Fragment>
            <Text>
              {questions.length} card{questions.length !== 1 ? 's' : ''}
            </Text>
            <Button
              title="Start Quiz"
              onPress={() => {
                navigate('Quiz', { key: id });
              }}
            />
          </Fragment>
        )}

        <FloatingAction
          overrideWithAction
          actions={this.actions}
          onPressItem={() => {
            navigate('AddCard', { key: id });
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, props) => {
  const deckName = props.navigation.getParam('key');
  return decks[deckName];
};

export default connect(mapStateToProps)(Deck);
