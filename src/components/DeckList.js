import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { navigate } from '../NavigationService';

import { fetchDecks } from '../actions';

import DeckListItem from './DeckListItem';

class DeckList extends Component {
  componentDidMount() {
    this.props.fetchDecks();
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
