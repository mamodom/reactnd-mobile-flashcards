import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { addCard } from '../actions';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  questionChanged = text => this.handleTextChanged('question', text);
  answerChanged = text => this.handleTextChanged('answer', text);

  handleTextChanged = (key, text) => {
    this.setState({ [key]: text });
  };

  addCard = () =>
    this.props.addCard({
      deckId: this.props.navigation.getParam('key'),
      ...this.state,
    });

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 15,
        }}
      >
        <View>
          <Text>Question</Text>
          <TextInput
            value={this.state.question}
            onChangeText={this.questionChanged}
          />
        </View>
        <View>
          <Text>Answer</Text>
          <TextInput
            value={this.state.answer}
            onChangeText={this.answerChanged}
          />
        </View>
        <Button title="Add card" onPress={this.addCard} />
      </View>
    );
  }
}

export default connect(
  null,
  { addCard }
)(AddCard);
