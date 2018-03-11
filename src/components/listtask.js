import React, {Component} from 'react';
import ReactNative from 'react-native';
import styles from '../styles.js';
import {View, TouchableHighlight, Text} from 'react-native';

class TaskItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liTask}>{this.props.task.title}</Text>
          <Text style={styles.liTime}>TIME HERE</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = TaskItem;