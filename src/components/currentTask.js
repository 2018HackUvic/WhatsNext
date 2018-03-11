import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native'
import Login from '../components/Login.js'
import MainTask from '../components/MainTask.js'
import MainTaskOngoing from '../components/MainTaskOngoing.js'

class CurrentTask extends Component {
    //init the state for task and started time
    state = {
        Task: 'Task',
        StartedTime: 'StartedTime'
    }
    //display the components
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
    //give the components some padding on top
    container: {
        position: 'absolute',
        top: 100,
    },
})
