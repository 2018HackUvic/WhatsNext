import React from 'react';
import Login from '../components/Login.js'
import CurrentTask from '../components/currentTask.js'
import { StackNavigator } from 'react-navigation';
import TimePicker from "../components/timepicker";


const RootStack = StackNavigator(
    {
        Login: {
          screen: Login,
        },
        MainTask: {
          screen: CurrentTask,
        },
        TimePicker: {
          screen: TimePicker,
        }
    },
    {
      initialRoute: 'Login',
    }
);

const Home = () => {
  return (
      <RootStack />
  )
};
export default Home