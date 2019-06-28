import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Block, Text, Button } from '../constants';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from '../constants/theme';

export default function Header(props) {
  const { navigation } = props;

  return (
    <Block row padding={[0, theme.sizes.base]} style={styles.container}>
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.img} />
        <Button 
          row middle 
          onPress={() => navigation.navigate('Login')}
        >
          <Text size={theme.sizes.font} style={{ marginRight: 10, color: 'gray' }}>
            Đăng nhập
          </Text>
          <Icon name="account-circle-outline" size={20} color="gray" />
        </Button>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: { 
    height: 20, 
    width: 120, 
    resizeMode: 'contain' 
  }
})