import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Paragraph, FAB, Button } from 'react-native-paper';

import { navigate } from '../NavigationService';
class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key'),
    };
  };

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
          <Fragment>
            <Paragraph>
              {questions.length} card{questions.length !== 1 ? 's' : ''}
            </Paragraph>
            <Button
              raised
              primary
              onPress={() => {
                navigate('Quiz', { key: id });
              }}
            >
              Start Quiz
            </Button>
          </Fragment>
        ) : (
          <Paragraph>There are no cards in this deck</Paragraph>
        )}

        <View
          style={{
            bottom: 0,
            right: 0,
            position: 'absolute',
            margin: 16,
          }}
        >
          <FAB icon="add" onPress={() => navigate('AddCard', { key: id })} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, props) => {
  const deckName = props.navigation.getParam('key');
  return decks[deckName];
};

export default connect(mapStateToProps)(Deck);
