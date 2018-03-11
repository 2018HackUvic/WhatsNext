import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timepicker from '../components/timepicker.js'

const Home = () => {
  return (
    <View style={styles.container}>
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
