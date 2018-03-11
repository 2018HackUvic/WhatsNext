<<<<<<< HEAD
import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import TaskMinsPicker from '../components/TaskMinsPicker.js'
import Login from '../components/Login.js'
export default class PickerExample extends Component {
  render() {
    return (<Login />)
  }
  }
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timepicker from '../components/timepicker.js'
import CurrentTask from '../components/currentTask.js'


const Home = () => {
  return (
    <View style={styles.container}>
      <CurrentTask />
      <Timepicker />
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> cc6a3f18699cc2170f5f201bf5ac0e27f22fe70f
