/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class RNCounter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  increment() {
    this.setState({count: this.state.count + 1})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Counter!
        </Text>
        <Text style={styles.instructions}>
          I'm rapidly deploying JavaScript TO MY PHONE!!
        </Text>
        <Text style={styles.instructions}>
          Button has been pressed {this.state.count} times!
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.increment.bind(this)}>
          <Text>
            Click Me!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    borderWidth: 1,
    borderColor: '#999999',
    padding: 4,
    borderRadius: 3,
  },
});

AppRegistry.registerComponent('RNCounter', () => RNCounter);
