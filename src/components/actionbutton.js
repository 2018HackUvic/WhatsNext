'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import styles from '../styles.js';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

class ActionButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor='#24CE84'
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;