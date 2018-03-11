import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native'

class TaskOngoing extends Component {
    //init the state for EstimatedTime and TimePeriodList
    state = {
        Done: false,
        Skiped: false
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="I'm Done"
                    color="Red"
                />
                <Button
                    title="SKIP"
                    color="Red"
                />
            </View>
        )
    }
}
export default TaskOngoing

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    },
    container: {
        width: 375,
        height: 300,
        position: 'absolute',
        bottom: 0,
    },
})
