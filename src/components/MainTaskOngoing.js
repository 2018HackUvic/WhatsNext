import React from 'react'
import CurrentTask from './currentTask'
import { StyleSheet, View } from 'react-native'
import TaskOngoing from "./taskOngoing";

const MainTask = () => {
    return (
        <View style={styles.container} >
            <CurrentTask />
            <TaskOngoing />
        </View>
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