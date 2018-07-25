import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button, TextInput } from 'react-native-paper';

import { addCard } from '../actions';

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Add card to ${navigation.getParam('key')}`,
  });

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
          flex: 0.75,
          justifyContent: 'center',
          padding: 15,
        }}
      >
        <TextInput
          label="Question"
          value={this.state.question}
          onChangeText={this.questionChanged}
        />

        <TextInput
          label="Answer"
          value={this.state.answer}
          onChangeText={this.answerChanged}
        />
        <Button style={{ marginTop: 15 }} raised primary onPress={this.addCard}>
          Add card
        </Button>
      </View>
    );
  }
}

export default connect(
  null,
  { addCard }
)(AddCard);
