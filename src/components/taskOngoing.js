import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native'
import { StackNavigator } from 'react-navigation';

class TaskOngoing extends Component {
    //init the state for EstimatedTime and TimePeriodList
    state = {
        Done: false,
        Skiped: false
    }

    startTask = () => {
        this.props.navigation.navigate('MainTask');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button onPress={() => this.startTask()}
                    title="I'm Done"
                    color="Red"
                />
                <Button onPress={() => this.startTask()}
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
