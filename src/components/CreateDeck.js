import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

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
          <Text style={{ marginRight: 10 }}>Deck Name</Text>
          <TextInput
            style={{
              flex: 1,
            }}
            value={this.state.deckName}
            onChangeText={this.onDeckNameChange}
          />
        </View>
        <Button title="Create Deck" onPress={this.createDeck} />
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
