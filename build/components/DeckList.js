import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
const DeckListItem = ({ name, cardCount, }) => (React.createElement(TouchableOpacity, { style: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        height: 150,
        marginHorizontal: 15,
        marginVertical: 10,
    } },
    React.createElement(Text, null,
        name,
        " "),
    React.createElement(Text, null,
        cardCount,
        " card",
        cardCount !== 1 ? 's' : '')));
const DeckList = () => (React.createElement(View, { style: {
        alignSelf: 'stretch',
        flex: 1,
    } },
    React.createElement(FlatList, { data: [
            { key: 'History', name: 'History', cardCount: 1 },
            { key: 'Physics', name: 'Physics', cardCount: 2 },
            { key: 'Maths', name: 'Maths', cardCount: 3 },
            { key: 'Chemestry', name: 'Chemestry', cardCount: 1 },
            { key: 'Biology', name: 'Biology', cardCount: 5 },
            { key: 'French', name: 'French', cardCount: 2 },
            { key: 'Spanish', name: 'Spanish', cardCount: 0 },
            { key: 'Geography', name: 'Geography', cardCount: 3 },
        ], renderItem: p => React.createElement(DeckListItem, Object.assign({}, p.item)) })));
export default DeckList;
//# sourceMappingURL=DeckList.js.map