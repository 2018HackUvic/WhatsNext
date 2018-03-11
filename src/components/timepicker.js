import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native'

class TimePicker extends Component {
      //init the state for EstimatedTime and TimePeriodList
    state = { EstimatedTime: '',
            TimePeriodList: [] }

    //called when user updated the picker value
    updateEstimatedTime = (EstimatedTime) => {
        this.setState({ EstimatedTime: EstimatedTime })
    }
render() {
    //provide the selection with data
    for (let i = 0; i < 10; i++) {
        this.state.TimePeriodList.push(i*10)
    }
    return (
        <View style = {styles.container}>
            <Text style={styles.text}>I'm free for next</Text>
            <Picker selectedValue={this.state.EstimatedTime}
                    onValueChange={this.updateEstimatedTime}
                    itemStyle={{ height: 50 }}>
                {
                    this.state.TimePeriodList.map((data) =>
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
