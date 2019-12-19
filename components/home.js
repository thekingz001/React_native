import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import styles from '../public/css';

export default class Home extends Component {

  onClickListener = () => {
    console.log( "SHOW LOG AT HOME");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={[styles.main, styles.textShadow]}>Home Form</Text>
          <Text style={[styles.main, styles.textShadow]}>Welcome to Homepage</Text>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener()}>
          <Text style={styles.loginText}>SHOW TEXT ON LOG</Text>
        </TouchableHighlight>
        <View>
          <Text style={styles.backLogin} onPress={() => this.props.navigation.navigate('auth')}>Logout</Text>
        </View>
      </View>
    );
  }
}