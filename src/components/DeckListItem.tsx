import React, { SFC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Deck } from '../reducers/decks';

type DeckListItemProps = Deck & {
  onCardPress: () => void;
};

const DeckListItem: SFC<DeckListItemProps> = ({
  title,
  questions,
  onCardPress,
  id,
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
    <Text>
      {id} {title}
    </Text>
    <Text>
      {questions.length} card{questions.length !== 1 ? 's' : ''}
    </Text>
  </TouchableOpacity>
);

export default DeckListItem;
