import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    AppRegistry,
    Image,
} from 'react-native';

import styles from '../public/css';
import Home from './home';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    loginfuntion = async () => {
        return fetch('http://192.168.1.11:8888/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.email,
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
                    if (data.type == 'login') {
                        alert('Login');
                        // console.log(data.name)
                        AsyncStorage.setItem('@MySuperStore:key', data.name);
                        this.reset()
                        this.props.navigation.navigate('home')
                    }
                    else {
                        alert('No Login');
                    }
                });
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            })
            .done();
    }

    reset() {
        this.setState({
            email: '',
            password: '',
        });
    }

    render() {
        return (
            <View style={[styles.box, styles.container]}>
                <View style={styles.container}>
                    <Text style={[styles.main, styles.textShadow]}>LOGIN</Text>
                </View>

                <View style={styles.container}>
                    <Image
                        style={styles.img}
                        source={require('../public/images/logo2.png')} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        autoFocus={true} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password} />
                </View>

                <View>
                    <Text style={styles.forgetp}>Forget Password?</Text>
                </View>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton, styles.shadow]} onPress={() => this.loginfuntion()}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>

                <View>
                    <Text style={styles.signup}>Don't have an account? <Text style={styles.signupp} onPress={() => this.props.navigation.navigate('register')}> Sign up here!</Text></Text>
                </View>
            </View>
        );
    }
}
AppRegistry.registerComponent('Login', () => Home);