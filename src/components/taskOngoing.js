import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native'
import MainTask from '../components/MainTask.js'
import TimePicker from "./timepicker";

class TaskOngoing extends Component {
    //init the state for EstimatedTime and TimePeriodList
    state = {
        Done: false,
        Skiped: false,
        mockData : ["clean the room", "Book a study room", "write a amazing todo list app called whats next", "Go to hackUvic!!!"]
    };



    render() {
        var RandomNumber = Math.floor(Math.random() * 3) + 1 ;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.mockData[RandomNumber]}</Text>
                <Text style={styles.textB}>0 mins ago</Text>
                <Button onPress={() => {
                    navigate('TimePicker', { status : 'done'})
                }}
                        title="I'm Done"
                        color="#24CE84"

                />
                <Button onPress={() => {
                    navigate('TimePicker', { status : 'skipped'})
                }}
                        title="SKIP"
                        color="#7a42f4"
                />
            </View>
        )
    }
}
export default TaskOngoing

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#24CE84',
        paddingBottom: 30
    },
    textB: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#24CE84',
        paddingBottom: 300
    },
    container: {
        width: 375,
        height: 300,
        position: 'absolute',
        top: 50,
    },
});
