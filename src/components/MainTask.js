import React from 'react'
import CurrentTask from './currentTask'
import {StyleSheet, View} from 'react-native'
import TimePicker from "./timepicker";

const MainTask = () => {
      return (
            <View style= { styles.container } >
                <CurrentTask />
                <TimePicker />
            </View >
              )
    };
export default MainTask

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});