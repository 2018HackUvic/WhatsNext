import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button, Alert } from 'react-native'
import MainTaskOngoing from './MainTaskOngoing';

class TimePicker extends Component {
      //init the state for EstimatedTime and TimePeriodList
    state = { EstimatedTime: '',
            TimePeriodList: [],
            IsTaskStarted: false,
            arrayInit: false,
            Task: 'Task',
            StartedTime: 'StartedTime'
    };

    //called when user updated the picker value
    updateEstimatedTime = (EstimatedTime) => {
        this.setState({ EstimatedTime: EstimatedTime })
    };

    alertStatus = () => {
        if(this.props.status === "done"){
            Alert.alert(
                "done"
            )
        } else if (this.props.status === "skipped"){
            Alert.alert(
                "skipped"
            )
        }
    }
    render() {

        const { navigate } = this.props.navigation;
    //provide the selection with data
    if (!this.state.arrayInit) {
        for (let i = 0; i < 10; i++) {
            this.state.TimePeriodList.push(i*10)
        }
        this.state.arrayInit = true;
    }
    return (

        <View style={styles.container}>
            <Text style={styles.text}>{this.state.Task}</Text>
            <Text style={styles.textB}>{this.state.StartedTime}</Text>
                <Text style={styles.text}>I'm free for the next</Text>
                <Picker selectedValue={this.state.EstimatedTime}
                    onValueChange={this.updateEstimatedTime}>
                    {
                        this.state.TimePeriodList.map((data) =>
                            <Picker.Item label={data.toString()} value={data} />
                        )
                    }
                </Picker>
                <Text style={styles.text}>Minutes</Text>

                <Button onPress={() => {
                    navigate('TaskOngoing', { task : 'clean the room', time : "0 mins ago"})
                }}
                    title="What's Next?"
                    color="#7a42f4"
                />
            </View>

    )
}
}
export default TimePicker
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#24CE84'
    },
    textB: {
        fontSize: 25,
        alignSelf: 'center',
        color: '#24CE84',
        paddingBottom: 100
    },
    container: {
        width: 375,
        height: 300,
        position: 'absolute',
        top: 50,
    },
});