import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './../components/Header';

export default class PostManager extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Header navigation={navigation} />
      ),
      headerStyle: { backgroundColor: "#fff", height: 60 },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };

  render() {
    return (
      <View>
        <Text>PostManager</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})