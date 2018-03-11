import React from 'react';
import Login from '../components/Login.js'
import { StackNavigator } from 'react-navigation';
import MainTask from '../components/MainTask.js'

const RootStack = StackNavigator(
    {
        Login: {
          screen: Login,
        },
        MainTask: {
          screen: MainTask,
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