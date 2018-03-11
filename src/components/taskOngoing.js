import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native'
import MainTask from '../components/MainTask.js'
import TimePicker from "./timepicker";

class TaskOngoing extends Component {
    //init the state for EstimatedTime and TimePeriodList
    state = {
        Done: false,
        Skiped: false,

    };



    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>clean the room</Text>
                <Text style={styles.textB}>2 mins ago</Text>
                <Button onPress={() => {
                    navigate('TimePicker', { status : 'done'})
                }}
                        title="I'm Done"
                        color="Blue"
                />
                <Button onPress={() => {
                    navigate('TimePicker', { status : 'skipped'})
                }}
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
    textB: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red',
        paddingBottom: 100
    },
    container: {
        width: 375,
        height: 300,
        position: 'absolute',
        top: 50,
    },
});
