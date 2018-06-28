import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export type DeckListItemProps = {
  name: string;
  cardCount: number;
  onCardPress?: Function;
};

const DeckListItem = ({ name, cardCount }: DeckListItemProps) => (
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 1,
      height: 150,
      marginHorizontal: 15,
      marginVertical: 10,
    }}
  >
    <Text>{name} </Text>
    <Text>
      {cardCount} card{cardCount !== 1 ? 's' : ''}
    </Text>
  </TouchableOpacity>
);

export default DeckListItem;
