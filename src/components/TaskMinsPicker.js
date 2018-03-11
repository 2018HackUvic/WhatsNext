import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
export default class TaskMinsPicker extends Component {
    state = { taskMins: [1, 2, 3, 4] }

    updateUser = (taskMins) => {
        this.setState({ taskMins: taskMins })
    }

    render() {
        return (
            <View>
                <Picker selectedValue={this.state.taskMins} onValueChange={this.updateTaskMins}>
                    {
                        this.state.taskMins.map((task) =>
                            <Picker.Item label={task.toString()} value={task} />
                        )
                    }
                </Picker>
                <Text style={styles.text}>{this.state.taskMins}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
})