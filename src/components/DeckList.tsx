import React from 'react';
import { View, FlatList } from 'react-native';

import { navigate } from '../NavigationService';

import DeckListItem from './DeckListItem';

const DeckList = () => (
  <View
    style={{
      alignSelf: 'stretch',
      flex: 1,
    }}
  >
    <FlatList
      data={[
        { key: 'History', name: 'History', cardCount: 1 },
        { key: 'Physics', name: 'Physics', cardCount: 2 },
        { key: 'Maths', name: 'Maths', cardCount: 3 },
        { key: 'Chemestry', name: 'Chemestry', cardCount: 1 },
        { key: 'Biology', name: 'Biology', cardCount: 5 },
        { key: 'French', name: 'French', cardCount: 2 },
        { key: 'Spanish', name: 'Spanish', cardCount: 0 },
        { key: 'Geography', name: 'Geography', cardCount: 3 },
      ]}
      renderItem={p => (
        <DeckListItem
          {...p.item}
          onCardPress={() => navigate('Deck', { key: p.item.key })}
        />
      )}
    />
  </View>
);

export default DeckList;
