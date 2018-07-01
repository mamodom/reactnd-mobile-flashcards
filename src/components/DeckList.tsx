import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { navigate } from '../NavigationService';
import { MapStateToPropsType } from '../utils';
import { Deck } from '../reducers/decks';

import { fetchDecks } from '../actions';

import DeckListItem from './DeckListItem';

class DeckList extends Component<DeckListProps> {
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

type DeckListProps = {
  fetchDecks: () => void;
} & DeckListStateProps;

type DeckListStateProps = {
  decks: Deck[];
};

const mapStateToProps: MapStateToPropsType<DeckListStateProps> = ({
  decks,
}) => {
  return { decks: Object.values(decks) };
};

export default connect(
  mapStateToProps,
  { fetchDecks }
)(DeckList);
