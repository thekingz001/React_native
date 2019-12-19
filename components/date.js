import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import styles from "../public/css";
//import { TouchableOpacity } from "react-native-gesture-handler";

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  handlePicker = () => {
    this.setState({
      isVisible: false
    })
  }

  showPicker = () => {
    this.setState({
        isVisible: true
    })
  }
  hidePicker = () => {
    this.setState({
        isVisible: false
    })
}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.showPicker}>
            <Text>Your Birth Day</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
        />
      </View>
    );
  }
}