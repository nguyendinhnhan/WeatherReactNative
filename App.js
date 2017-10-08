/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
        </View>
        <View style={styles.row}>
        </View>
        <View style={styles.row}>
        </View>
        <View style={styles.row}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#c3c3c9'
  },
  row: {
    flex: 1,
    backgroundColor: '#fffdff',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }
});
