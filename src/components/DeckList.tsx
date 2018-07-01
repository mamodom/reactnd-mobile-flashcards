import React, { SFC } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { navigate } from '../NavigationService';
import { MapStateToPropsType } from '../utils';
import { Deck } from '../reducers/decks';

import DeckListItem from './DeckListItem';

const DeckList: SFC<DeckListProps> = ({ decks }) => (
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

type DeckListProps = {
  decks: Deck[];
};

const mapStateToProps: MapStateToPropsType<DeckListProps> = ({ decks }) => {
  return { decks: Object.values(decks) };
};

export default connect(mapStateToProps)(DeckList);
