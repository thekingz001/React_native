import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../public/css';

var state = [];
// const userinfo = { email: 'admin@admin', password: 'admin' };

export default class Register extends Component {
  registerfuntion = async () => {
    return fetch('http://192.168.1.11:8888/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.email,
        name: this.state.name,
        password: this.state.password,
      })
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then((data) => {
          if (data.x == 'register') {
            alert('Register');
            this.props.navigation.navigate('auth')
        }
        else{
            alert('No Register');
            this.props.navigation.navigate('auth')
        }
        });
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      })
      .done();
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
    }
  }

  render() {
    return (
      <View style={[styles.box, styles.container]}>
        <View style={styles.container}>
          <Text style={[styles.main, styles.textShadow]}>SIGN UP</Text>
        </View>
        <View style={styles.ReginputContainer}>
          <TextInput style={styles.Reginputs}
            placeholder="Name"
            underlineColorAndroid='transparent'
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name} />
        </View>

        <View style={styles.ReginputContainer}>
          <TextInput style={styles.Reginputs}
            placeholder="Email"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email} />
        </View>

        <View style={styles.ReginputContainer}>
          <TextInput style={styles.Reginputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password} />
        </View>

        <View style={styles.ReginputContainer}>
          <TextInput style={styles.Reginputs}
            placeholder="Phone"
            underlineColorAndroid='transparent'
            onChangeText={(phone) => this.setState({ phone })}
            value={this.state.phone} />
        </View>

        <TouchableOpacity style={[styles.RegbuttonContainer, styles.RegButton, styles.shadow]} onPress={() => this.registerfuntion()}>
          <Text style={styles.RegText}>SIGN UP</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.backLogin} onPress={() => this.props.navigation.navigate('auth')}>Login</Text>
        </View>

      </View>
    );
  }
}