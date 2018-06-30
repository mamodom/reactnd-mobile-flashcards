import React, { SFC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

type DeckListItemProps = {
  name: string;
  cardCount: number;
  onCardPress: () => void;
};

const DeckListItem: SFC<DeckListItemProps> = ({
  name,
  cardCount,
  onCardPress,
}) => (
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
    onPress={onCardPress}
  >
    <Text>{name} </Text>
    <Text>
      {cardCount} card{cardCount !== 1 ? 's' : ''}
    </Text>
  </TouchableOpacity>
);

export default DeckListItem;
