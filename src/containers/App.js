import React from 'react';
import Login from '../components/Login.js'
import MainTask from '../components/MainTask.js'
import TaskOngoing from '../components/taskOngoing.js'
import { StackNavigator } from 'react-navigation';
import TimePicker from "../components/timepicker";
import CurrentTask from "../components/currentTask"

const RootStack = StackNavigator(
    {
        // Login: {
        //   screen: Login,
        // },
        TimePicker: {
          screen: TimePicker
        },
        CurrentTask: {
          screen: CurrentTask
        },
        TaskOngoing: {
            screen: TaskOngoing
        }
    },
    {
      initialRoute: 'MainTask'
    }
);

const Home = () => {
  return (
      <RootStack />
  )
};
export default Home