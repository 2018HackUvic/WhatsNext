import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button } from 'react-native'
import { renderIf } from './renderIf'
class TimePicker extends Component {
      //init the state for EstimatedTime and TimePeriodList
    state = { EstimatedTime: '',
            TimePeriodList: [],
            IsTaskStarted: false,
            arrayInit: false
    };

    //called when user updated the picker value
    updateEstimatedTime = (EstimatedTime) => {
        this.setState({ EstimatedTime: EstimatedTime })
    };

    startTask = () => {
        this.props.navigation.navigate('MainTaskOngoing', { time: this.state.EstimatedTime } );
    };

    taskOngoing = () => {
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
        );
    };

    taskTimePicker = () => {
        <View style={styles.container}>
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
            <Button onPress={() => this.startTask()}
                title="What's Next?"
                color="blue"
            />
        </View>
    }

render() {
    //provide the selection with data
    if (!this.state.arrayInit) {
        for (let i = 0; i < 10; i++) {
            this.state.TimePeriodList.push(i*10)
        }
        this.state.arrayInit = true;
    }
    return (
        <View style = {styles.container}>
            {/* {renderIf(this.state.IsTaskStarted,
                this.taskOngoing().context
            )}
            {renderIf(!this.state.isUserLoggedIn,
               {taskTimePicker()}
            )} */}
            <View style={styles.container}>
                <Text style={styles.text}>I'm free for next</Text>
                <Picker selectedValue={this.state.EstimatedTime}
                    onValueChange={this.updateEstimatedTime}>
                    {
                        this.state.TimePeriodList.map((data) =>
                            <Picker.Item label={data.toString()} value={data} />
                        )
                    }
                </Picker>
                <Text style={styles.text}>{this.state.EstimatedTime}</Text>
                <Text style={styles.text}>Mins</Text>
                <Button onPress={() => this.startTask()}
                    title="What's Next?"
                    color="blue"
                />
            </View>
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
        bottom: 50,
    },
})
