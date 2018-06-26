import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const DeckListItem = ({
  name,
  cardCount,
}: {
  name: string;
  cardCount: number;
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
  >
    <Text>{name} </Text>
    <Text>
      {cardCount} card{cardCount !== 1 ? 's' : ''}
    </Text>
  </TouchableOpacity>
);

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
      renderItem={p => <DeckListItem {...p.item} />}
    />
  </View>
);

export default DeckList;
