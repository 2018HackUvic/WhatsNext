'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import firebase from "../components/firebase";
import Swipeout from 'react-native-swipeout';
import StatusBar from '../components/statusbar';
import ActionButton from '../components/actionbutton';
import ListTask from '../components/listtask';
import styles from '../styles.js';
import TimePicker from '../components/timepicker'
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

const firebaseApp = firebase.app();

export default class TaskDetail extends Component {
  constructor(props) {
  super(props);
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  };
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
          time: child.val().time,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tasks)
      });

    });
  }
  
  componentDidMount() {
    this.listenForTasks(this.tasksRef);
  }
  
    render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.taskContainer}>

        <StatusBar title="What's Next" nav="Back" onPressNav={() => {
                    navigate('TimePicker', { task : 'clean the room'})}} onPressAdd={this._addTask.bind(this)} />

        <ListView 
		dataSource={this.state.dataSource} 
		renderRow={this._renderTask.bind(this)}      
		enableEmptySections={true}
		style={styles.listview} />

        <ActionButton title="View Completed" />

      </View>
    );
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
  
  _editTask(task) {
AlertIOS.prompt(
	'Edit Task',
      null,
      [
	    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Save',
          onPress: (text) => {
            this.tasksRef.child(task._key).set({title: text})
          }
        },
      ],
      'plain-text'
    );
  }
	
_renderTask(task) {
	let swipeBtns = [
	
  {
    text: 'Edit',
    backgroundColor: '#7A42F4',
    onPress: () => {this._editTask(task)}
 },
  {
    text: 'Delete',
    backgroundColor: '#EC7063',
    onPress: () => { this.tasksRef.child(task._key).remove() }
 }
];


    return (
	      <Swipeout right={swipeBtns}
        autoClose={true}
        backgroundColor= 'transparent'>
        <ListTask task={task} />
	  </Swipeout>
    );
  }
}

module.exports = TaskDetail;