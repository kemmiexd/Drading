import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './../components/Header';

export default class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Đăng nhập',
      headerStyle: { backgroundColor: "#fff", height: 60, elevation: 0, borderBottomColor: '#f9f9f9', borderBottomWidth: .5, },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };

  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})