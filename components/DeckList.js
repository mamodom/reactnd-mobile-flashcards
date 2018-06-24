import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const DeckListItem = ({ name, cardCount }) => (
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
        { name: 'History', cardCount: 1 },
        { name: 'Physics', cardCount: 2 },
        { name: 'Maths', cardCount: 3 },
        { name: 'Chemestry', cardCount: 1 },
        { name: 'Biology', cardCount: 5 },
        { name: 'French', cardCount: 2 },
        { name: 'Spanish', cardCount: 0 },
        { name: 'Geography', cardCount: 3 },
      ]}
      renderItem={p => <DeckListItem key={p.item.name} {...p.item} />}
    />
  </View>
);

export default DeckList;
