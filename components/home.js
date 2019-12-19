import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import styles from '../public/css';

export default class Home extends Component {

  state = {
    location: null,
    loading: false,
    name: 'null',
  }

  logout = async () => {
    try {
      await AsyncStorage.removeItem('@MySuperStore:key')
    } catch(e) {
      // remove error
      console.log('Logout error.' + e)
    }
    console.log('Logout.')
    Alert.alert('Logout');
    this.props.navigation.navigate('auth')
  }

  _get = async () => {
    try {
      AsyncStorage.getItem('@MySuperStore:key')
      .then((nameStore) => {
        if (nameStore) {
          this.setState({ name: nameStore });
        }
      });
    } catch(e) {
      // getdata error
      console.log('Error. =' + e)
    }
  }

  _requestLocation = () => {
    this.setState({ loading: true, location: null });

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 6000,
    })
      .then(location => {
        console.log('Location =' + JSON.stringify(location));
        this.setState({
          location,
          loading: false,
        });
      })
      .catch(ex => {
        const { code, message } = ex;
        console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        this.setState({
          location: null,
          loading: false,
        });
      });
  }

  render() {
    const { location, loading } = this.state;
    this._get()

    if(this.state.name == 'null'){
      console.log('null')
      this.props.navigation.navigate('auth')
    }
    else{
      console.log('test1')
    }
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.main}>Home From</Text>
        </View>
        <Text style={styles.instructions}>Welcome : {this.state.name} </Text>
        <Text style={styles.instructions}>To get location, press the button:</Text>
        <View style={styles.button}>
          <Text style={styles.signupp} onPress={() => this.logout()}>Log out</Text>
          <Button
            disabled={loading}
            title="Get Location"
            onPress={this._requestLocation}
          />
        </View>
        {loading ? (<ActivityIndicator />) : null}
        {location ? (<Text style={styles.location}>Latitude ={JSON.stringify(location.latitude)}</Text>) : null}
        {location ? (<Text style={styles.location}>Longitude ={JSON.stringify(location.longitude)}</Text>) : null}
      </View>
    );
  }
}