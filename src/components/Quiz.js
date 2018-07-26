import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Title,
  Subheading,
  Paragraph,
  Headline,
} from 'react-native-paper';

import { navigate, back } from '../NavigationService';
import { dismissTodaysNotification } from '../notificationService';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key'),
    };
  };

  state = {
    currentQuestion: 0,
    score: 0,
    completed: false,
  };

  answeredSuccessfully = async outcome => {
    const completed =
      this.props.questions.length <= this.state.currentQuestion + 1;

    if (completed) {
      await dismissTodaysNotification();
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      score: this.state.score + !!outcome,
      completed,
    });
  };

  restartQuiz = () => {
    back();
    navigate('Quiz', { key: this.props.navigation.getParam('key') });
  };

  render() {
    const currentQuestion = this.props.questions[this.state.currentQuestion];

    if (this.state.completed)
      return (
        <View style={{ flex: 1, alignItems: 'center', padding: 15 }}>
          <Title>QUIZ COMPLETED!</Title>
          <Feather
            name="check-circle"
            size={110}
            color="green"
            style={{
              marginTop: 15,
            }}
          />
          <Headline
            style={{
              marginTop: 15,
            }}
          >
            Score: {this.state.score / this.props.questions.length} %
          </Headline>
          <Button
            raised
            primary
            style={{
              marginTop: 15,
            }}
            onPress={this.restartQuiz}
          >
            Restart Quiz
          </Button>
        </View>
      );

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

  onAnswered = async outcome => {
    this.setState({ answerVisible: false });
    await this.props.onAnswered(outcome);
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
