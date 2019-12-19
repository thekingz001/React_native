import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../public/css';
//import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class form extends Component {

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid= "white"
                    placeholder="username"
                    placeholderTextColor= "black"
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid= "white"
                    placeholder="password"
                    placeholderTextColor= "black"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}