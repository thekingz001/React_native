import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styles from '../public/css';

export default class logo extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.img}
                    source={require('../public/images/logo.png')} />
                    <Text style={styles.logoText}>welcome</Text>
            </View>
        )
    }
}