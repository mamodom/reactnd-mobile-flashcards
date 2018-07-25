import React from 'react';
import { Card, CardContent, Title, Paragraph } from 'react-native-paper';

const DeckListItem = ({ title, questions, onCardPress, id }) => (
  <Card
    style={{ minHeight: 100, marginVertical: 7.5, marginHorizontal: 15 }}
    onPress={onCardPress}
  >
    <CardContent>
      <Title>{title}</Title>
      <Paragraph>
        {questions.length} card{questions.length !== 1 ? 's' : ''}
      </Paragraph>
    </CardContent>
  </Card>
);

export default DeckListItem;
