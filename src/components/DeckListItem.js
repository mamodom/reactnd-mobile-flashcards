import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const DeckListItem = ({ title, questions, onCardPress, id }) => (
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
