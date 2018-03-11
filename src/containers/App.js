import React from 'react';
import Login from '../components/Login.js'
import { StackNavigator } from 'react-navigation';
import MainTask from '../components/MainTask.js'
import MainTaskOngoing from '../components/MainTaskOngoing.js'

const RootStack = StackNavigator(
    {
        Login: {
          screen: Login,
        },
        MainTask: {
          screen: MainTask,
        },
        MainTaskOngoing: {
          screen: MainTaskOngoing
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