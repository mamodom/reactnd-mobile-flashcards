import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { TextInput, Button } from 'react-native-paper';

import { createDeck } from '../actions';

class CreateDeck extends Component {
  state = {
    deckName: '',
  };

  static navigationOptions = {
    title: 'Create Deck',
  };

  onDeckNameChange = text => {
    this.setState({ deckName: text });
  };

  createDeck = () => {
    this.props.createDeck(this.state.deckName);
  };

  render() {
    return (
      <View
        style={{
          flex: 0.75,
          justifyContent: 'center',
          padding: 15,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <TextInput
            label="Deck name"
            style={{
              flex: 1,
            }}
            value={this.state.deckName}
            onChangeText={this.onDeckNameChange}
          />
        </View>
        <Button raised primary onPress={this.createDeck}>
          Create Deck
        </Button>
      </View>
    );
  }
}

export default connect(
  null,
  {
    createDeck,
  }
)(CreateDeck);
