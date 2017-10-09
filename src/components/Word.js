import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Word extends Component<{}> {

  render() {
    const { en, vn, memorized, id } = this.props.word;
    const textDecorationLine = memorized ? 'line-through' : 'none';
    const textMemorizedButton = memorized ? 'Forgot' : 'Memorized';
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ textDecorationLine }}>{en}</Text>
          <Text>{vn}</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={() => {this.props.dispatch({ type: 'TOGGLE_MEMORIZED', id })}}>
            <Text style={styles.buttonText}>{textMemorizedButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Show</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default connect()(Word);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        padding: 10,
        margin: 10
    },
    containerButton: {
      flexDirection: 'row'
    },
    buttonText: {
      backgroundColor: '#c3c3c9',
      padding: 5,
      margin: 5
    }
});