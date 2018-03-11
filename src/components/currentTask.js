import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native'

class CurrentTask extends Component {
    state = {
        Task: 'Task',
        StartedTime: 'StartedTime'
    }
    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.text}>{this.state.Task}</Text>
                    <Text style={styles.text}>{this.state.StartedTime}</Text>
                </View>
            )
        }
    }
    export default CurrentTask

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'blue'
    },
    container: {
        position: 'absolute',
        top: 100,
    },
})
