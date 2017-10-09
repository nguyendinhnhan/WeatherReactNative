import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { showAll, showMemorized, showPractice } from '../actions/index';

class Filter extends Component<{}> {
  getStyleButton(buttonName) {
    const { filterStatus } = this.props;
    if (filterStatus === buttonName) 
      return { color: '#e67e22', fontWeight: 'bold', padding: 10 };
    
    return styles.buttonText;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {this.props.dispatch({ type: 'SHOW_ALL'})}}>
          <Text style={this.getStyleButton('SHOW_ALL')}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.props.showMemorized()}}>
          <Text style={this.getStyleButton('SHOW_MEMORIZED')} >Memorized</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.props.showPractice()}}>
          <Text style={this.getStyleButton('SHOW_PRACTICE')} >Practice</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    filterStatus: state.filterStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAll,
    showMemorized,
    showPractice
  }
}

export default connect(mapStateToProps, { showMemorized, showPractice })(Filter);

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#2980b9',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    buttonText: {
      color: 'white',
      padding: 10
    }
});