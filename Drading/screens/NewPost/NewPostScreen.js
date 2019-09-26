import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './../../components/Header';

export default class NewPostScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Chọn danh mục',
      headerStyle: { backgroundColor: "#fff", height: 60 },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };

  render() {
    return (
      <View>
        <Text>NewPostScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})