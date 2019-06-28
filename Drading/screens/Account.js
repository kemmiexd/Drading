import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './../components/Header';

export default class Account extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Header />
      ),
      headerStyle: { backgroundColor: "#fff", height: 60 },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };

  render() {
    return (
      <View>
        <Text>Account</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})