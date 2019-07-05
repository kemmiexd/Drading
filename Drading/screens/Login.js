import React from "react";
import { StyleSheet, Image, Dimensions, AsyncStorage } from "react-native";
import { Block, Text, Button } from '../constants';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from '../constants/theme';
import * as Facebook from 'expo-facebook';
import * as firebase from 'firebase';

import Header from '../components/Header';
import callApi from './../util/callApi';

import axios from 'axios';

const { width } = Dimensions.get('window');

const firebaseConfig = {
  apiKey: "AIzaSyBqsSJyljrNqkFF2c0f_2He_gKc6cCdtvY",
  authDomain: "drading-apps.firebaseapp.com",
  databaseURL: "https://drading-apps.firebaseio.com",
  projectId: "drading-apps",
  storageBucket: "",
};
firebase.initializeApp(firebaseConfig);

convertFormatDate = (dateString) => {
  var date = new Date(dateString);
  month = ("0" + (date.getMonth() + 1)).slice(-2);
  return `Tháng ${[month, date.getFullYear()].join("/")}`;
}

export default class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: null,
      headerStyle: { backgroundColor: "#fff", height: 60, },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };
  
  componentDidMount() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user !== null) {
    //     const { displayName, photoURL, uid, metadata } = user;

    //     try {
    //       const dateOfJoin = convertFormatDate(metadata.creationTime);

    //       callApi('users', 'POST', {
    //         displayName, photoURL,  uid, dateOfJoin 
    //       }).then(res => {
    //         const { displayName, photoURL, uid, dateOfJoin } = res.data;

    //         AsyncStorage.setItem('displayName', displayName);
    //         AsyncStorage.setItem('photoURL', photoURL);
    //         AsyncStorage.setItem('uid', uid);
    //         AsyncStorage.setItem('dateOfJoin', dateOfJoin);
    //       })

    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // });

    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        console.log(user);
        const { displayName, photoURL, uid, metadata } = user;

        try {
          const dateOfJoin = convertFormatDate(metadata.creationTime);

          AsyncStorage.setItem('displayName', displayName);
          AsyncStorage.setItem('photoURL', photoURL);
          AsyncStorage.setItem('uid', uid);
          AsyncStorage.setItem('dateOfJoin', dateOfJoin);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  async loginWithFacebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '2360111344066790', 
      { permissions: ['public_profile'] }
    )

    if (type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      this.props.navigation.navigate("Homepage");
      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }

  render() {
    return (
      <Block middle>
        <Image source={require('../assets/images/login.png')} style={styles.img} />
        <Button 
          center middle 
          style={[styles.btn, styles.facebook]}
          onPress={() => this.loginWithFacebook()}
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
          onPress={() => this.loginWithGoogle()}
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
