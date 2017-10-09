import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Word from './Word';
import Filter from './Filter';

class Main extends Component<{}> {
  getArrWords() {
    const { arrWords, filterStatus } = this.props;
    if (filterStatus === 'SHOW_MEMORIZED') return arrWords.filter((e) => e.memorized);
    if (filterStatus === 'SHOW_PRACTICE') return arrWords.filter((e) => !e.memorized);
    return arrWords;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>My Word - {this.props.filterStatus}</Text>
        <FlatList 
          data={this.getArrWords()}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Word word={item} />}
        />
        <Filter />
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
      filterStatus: state.filterStatus,
      arrWords: state.arrWords
    }
}

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#c3c3c9'
    }
});