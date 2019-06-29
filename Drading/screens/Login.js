import React from "react";
import { StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { Block, Text, Button } from '../constants';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from '../constants/theme';

const { width } = Dimensions.get('window');

export default class Login extends React.Component {
  static navigationOptions = () => {
    return {
      title: "Đăng nhập",
      headerStyle: { backgroundColor: "#fff", height: 60, },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };

  render() {
    return (
      <Block middle>
        <Image source={require('../assets/login-2.png')} style={styles.img} />
        <Button 
          center middle 
          style={[styles.btn, styles.facebook]}
        >
          <Icon 
            size={24} 
            name="facebook" 
            color="#fff" 
            style={styles.icon} 
          />
          <Text color="#fff">
            ĐĂNG NHẬP BẰNG FACEBOOK
          </Text>
        </Button>
        
        <Button 
          center middle 
          style={[styles.btn, styles.google]}
        >
          <Icon 
            size={24} 
            name="google" 
            color="#fff" 
            style={styles.icon} 
          />
          <Text color="#fff">
            ĐĂNG NHẬP BẰNG GOOGLE
          </Text>
        </Button>
      </Block>

    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: width,
    height: width * 0.8,
    resizeMode: 'cover'
  },
  btn: {
    width: width - (theme.sizes.base * 2),
    height: 50,
    borderRadius: 5,
    margin: theme.sizes.base,
  },
  facebook: {
    backgroundColor: '#3B5999'
  },
  google: {
    backgroundColor: '#DD4B39'
  },
  icon: {
    position: 'absolute',
    left: theme.sizes.base
  }
});
