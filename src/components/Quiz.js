import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Title,
  Subheading,
  Paragraph,
} from 'react-native-paper';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key'),
    };
  };

  state = {
    currentQuestion: 0,
    score: 0,
  };

  answeredSuccessfully = outcome => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      score: this.state.score + !!outcome,
    });
  };

  render() {
    const currentQuestion = this.props.questions[this.state.currentQuestion];

    return (
      <View style={{ flex: 1, alignItems: 'stretch', padding: 15 }}>
        <Subheading style={{ alignSelf: 'center' }}>
          Question {this.state.currentQuestion + 1} of{' '}
          {this.props.questions.length}
        </Subheading>
        <Question {...currentQuestion} onAnswered={this.answeredSuccessfully} />
      </View>
    );
  }
}

class Question extends Component {
  state = {
    answerVisible: false,
  };

  showAnswer = () => {
    this.setState({ answerVisible: true });
  };

  onAnswered = outcome => {
    this.setState({ answerVisible: false });
    this.props.onAnswered(outcome);
  };

  render() {
    const { question, answer } = this.props;
    if (!this.state.answerVisible)
      return (
        <Card style={{ marginTop: 15 }}>
          <CardContent>
            <View style={{ minHeight: 100 }}>
              <Title style={{ fontSize: 25 }}>{question}</Title>
            </View>
          </CardContent>
          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button key="showAnswer" onPress={this.showAnswer}>
              Show Answer
            </Button>
          </CardActions>
        </Card>
      );

    return (
      <Card style={{ marginTop: 15 }}>
        <CardContent>
          <View style={{ minHeight: 100 }}>
            <Title style={{ fontSize: 25 }}>{question}</Title>
            <Paragraph>{answer}</Paragraph>
          </View>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
          <Button key="correct" primary onPress={() => this.onAnswered(true)}>
            Correct
          </Button>
          <Button
            key="incorrect"
            color="red"
            onPress={() => this.onAnswered(false)}
          >
            Incorrect
          </Button>
        </CardActions>
      </Card>
    );
  }
}
const mapStateToProps = (state, props) => {
  const deckId = props.navigation.getParam('key');

  return state.decks[deckId];
};

export default connect(mapStateToProps)(Quiz);
