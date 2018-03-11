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
