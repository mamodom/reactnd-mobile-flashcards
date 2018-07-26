import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { FAB } from 'react-native-paper';

import { navigate } from '../NavigationService';
import { ensureNotificationIsSetup } from '../notificationService';

import { fetchDecks } from '../actions';

import DeckListItem from './DeckListItem';

class DeckList extends Component {
  static navigationOptions = {
    title: 'Flashcards',
  };

  async componentDidMount() {
    this.props.fetchDecks();
    await ensureNotificationIsSetup();
  }

  render() {
    const { decks } = this.props;
    return (
      <View
        style={{
          alignSelf: 'stretch',
          flex: 1,
        }}
      >
        <FlatList
          data={decks}
          keyExtractor={deck => deck.id}
          renderItem={({ item }) => (
            <DeckListItem
              {...item}
              onCardPress={() => navigate('Deck', { key: item.id })}
            />
          )}
        />
        <View
          style={{
            bottom: 0,
            right: 0,
            position: 'absolute',
            margin: 16,
          }}
        >
          <FAB icon="add" onPress={() => navigate('CreateDeck')} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => {
  return { decks: Object.values(decks) };
};

export default connect(
  mapStateToProps,
  { fetchDecks }
)(DeckList);
