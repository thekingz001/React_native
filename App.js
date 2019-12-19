import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './components/login';
import Register from './components/register';
import Home from './components/home';

const RootStack = createStackNavigator(
  {
    home: Home,
    register: Register,
    auth: Login,
  },
  {
    headerMode: 'none',
    initialRouteName: 'auth'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
        <AppContainer/> 
    );
  }
}