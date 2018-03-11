import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Button, Alert, AlertIOS } from 'react-native'
import MainTaskOngoing from './MainTaskOngoing';
import StatusBar from './statusbar';
import TaskDetail from './taskdetail';
import firebase from "../components/firebase";

const firebaseApp = firebase.app();

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

    constructor(props) {
        super(props);
        this.tasksRef = this.getRef().child('tasks');
      }
      
      getRef() {
          return firebaseApp.database().ref();
      }

      listenForTasks(tasksRef) {
        tasksRef.on('value', (snap) => {
    
          // get children as an array
          var tasks = [];
          snap.forEach((child) => {
            tasks.push({
              title: child.val().title,
              _key: child.key
            });
          });    
        });
      }

      componentDidMount() {
        this.listenForTasks(this.tasksRef);
      }

      _addTask() {
        AlertIOS.prompt(
          'Add New Task',
          null,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {
              text: 'Add',
              onPress: (text) => {
                this.tasksRef.push({ title: text })
              }
            },
          ],
          'plain-text'
        );
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
        <View>
            <View style={styles.taskContainer}>
        <StatusBar title="What's Next" nav="Tasks" onPressAdd={this._addTask.bind(this)} onPressNav={() => {
            navigate('TaskDetail', {task: 'test'}) }}/>
        </View>
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
        top: 100,
    },
});