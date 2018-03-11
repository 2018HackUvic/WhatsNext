'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import styles from '../styles.js';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

class StatusBar extends Component {
  render() {
    return (
      <View>
        <View style={styles.statusbar}>
        <TouchableHighlight
          underlayColor='#24CE84'
          onPress={this.props.onPressNav}>
          <Text style={styles.navbarButtonLeft}>{this.props.nav}</Text>
          </TouchableHighlight>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
          <TouchableHighlight
          underlayColor='#24CE84'
          onPress={this.props.onPressAdd}>
          <Text style={styles.navbarButtonRight}>Add</Text>
          </TouchableHighlight>
       </View>
      </View>
    );
  }
}

module.exports = StatusBar;