import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { FloatingAction } from 'react-native-floating-action';

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
        <FloatingAction
          overrideWithAction
          actions={[
            {
              text: 'Create Deck',
              name: 'create_deck',
              position: 1,
              icon: require('../images/add.png'),
            },
          ]}
          onPressItem={() => {
            navigate('CreateDeck');
          }}
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
