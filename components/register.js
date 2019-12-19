import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../public/css';

var state = [];
const userinfo = { email: 'admin@admin', password: 'admin' };

export default class Register extends Component {
  registerfuntion = async () => {
    if (userinfo.email === this.state.email && userinfo.password === this.state.password) {
      alert('Register');
    }
    else {
      alert('No Register');
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
            keyboardType="name"
            underlineColorAndroid='transparent'
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name} />
        </View>

        <View style={styles.ReginputContainer}>
          <TextInput style={styles.Reginputs}
            placeholder="Email"
            keyboardType="email-address"
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
            keyboardType="phone"
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