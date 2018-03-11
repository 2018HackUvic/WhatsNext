import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native'

class TimePicker extends Component {
    state = { EstimatedTime: '',
            ArrayList: [] }
    updateEstimatedTime = (EstimatedTime) => {
        this.setState({ EstimatedTime: EstimatedTime })
    }
render() {
    for (let i = 0; i < 10; i++) {
        this.state.ArrayList.push(i*10)
    }
    return (
        <View style = {styles.container}>
            <Text style={styles.text}>I'm free for next</Text>
            <Picker selectedValue={this.state.EstimatedTime}
                    onValueChange={this.updateEstimatedTime}
                    itemStyle={{ height: 50 }}>
                {
                    this.state.ArrayList.map((data) =>
                        <Picker.Item label={data.toString()} value={data} />
                    )
                }
            </Picker>
            <Text style={styles.text}>{this.state.EstimatedTime}</Text>
            <Text style={styles.text}>Mins</Text>
            <Button
                title="What's Next?"
                color="blue"
        />
        </View>

    )
}
}
export default TimePicker

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
