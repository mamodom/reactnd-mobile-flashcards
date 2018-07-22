import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    showAnswer: false,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key'),
    };
  };

  showAnswer = () => {
    this.setState({ showAnswer: true });
  };

  answeredSuccessfully = outcome => {
    this.setState({
      showAnswer: false,
      currentQuestion: this.state.currentQuestion + 1,
    });
  };

  correct = () => this.answeredSuccessfully(true);

  incorrect = () => this.answeredSuccessfully(false);

  render() {
    const currentQuestion = this.props.questions[this.state.currentQuestion];

    return (
      <View style={{ flex: 1, alignItems: 'stretch' }}>
        <View
          style={{
            flex: 1,
            borderColor: 'blue',
            borderStyle: 'solid',
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card {...currentQuestion} />
        </View>
        <Text style={{ alignSelf: 'center' }}>
          Question 1 of {this.props.questions.length}
        </Text>
      </View>
    );
  }
}

const Card = ({ question, answer, showAnswer, onAnswered }) => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 30 }}>{question}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text> Show Answer</Text>
      </TouchableOpacity>
      <Text>{answer}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text> Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text> Incorrect</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const deckId = props.navigation.getParam('key');

  return state.decks[deckId];
};

export default connect(mapStateToProps)(Quiz);
