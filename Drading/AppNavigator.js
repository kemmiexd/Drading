import React from 'react';
import { Dimensions } from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import MDIcon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from './constants/theme';

import Homepage from './screens/Home/Homepage';
import PostManager from './screens/PostManager';
import SearchScreen from './screens/SearchScreen';
import Account from './screens/Account';

import Login from './screens/Login';

const HomepageStack = createStackNavigator({
  Homepage,
  Login
});
HomepageStack.navigationOptions = {
  tabBarLabel: 'Trang chủ',
  tabBarIcon: ({ focused }) => {
    return (
      <MDIcon
        name={focused ? "home" : "home-outline"}
        size={focused ? 0 : 24}
        color="gray"
        style={{ 
          marginTop: 15, 
          textShadowColor: 'rgba(0, 0, 0, 0.15)',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 10
        }}
      />
    )
  }
}

const PostManagerStack = createStackNavigator({
  PostManager,
  Login
});
PostManagerStack.navigationOptions = {
  tabBarLabel: 'Quản lý bài đăng',
  tabBarIcon: ({ focused }) => {
    return (
      <MDIcon
        name="clipboard-text-outline"
        size={focused ? 0 : 24}
        color="gray"
        style={{ 
          marginTop: 15, 
          textShadowColor: 'rgba(0, 0, 0, 0.15)',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 10
        }}
      />
    )
  }
}

const SearchScreenStack = createStackNavigator({
  SearchScreen,
  Login
});
SearchScreenStack.navigationOptions = {
  tabBarLabel: 'Tìm kiếm',
  tabBarIcon: ({ focused }) => {
    return (
      <MDIcon
        name="magnify"
        size={focused ? 0 : 24}
        color="gray"
        style={{ 
          marginTop: 15, 
          textShadowColor: 'rgba(0, 0, 0, 0.15)',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 10
        }}
      />
    )
  }
}

const AccountStack = createStackNavigator({
  Account,
  Login
});
AccountStack.navigationOptions = {
  tabBarLabel: 'Tài khoản',
  tabBarIcon: ({ focused }) => {
    return (
      <MDIcon
        name="account-tie"
        size={focused ? 0 : 24}
        color="gray"
        style={{ 
          marginTop: 15, 
          textShadowColor: 'rgba(0, 0, 0, 0.15)',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 10
        }}
      />
    )
  }
}

const AppNavigator = createMaterialTopTabNavigator(
  {
    HomepageStack,
    PostManagerStack,
    SearchScreenStack,
    AccountStack,
  },
  {
    initialRouteName: "HomepageStack",
    tabBarPosition: "bottom",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: theme.colors.main,
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#fff',
        padding: 0,
        height: 50,
        margin: 0,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#f4f4f4',
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: .2,
        shadowRadius: 3,
        elevation: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 10,
        width: Dimensions.get('window').width - 20,
        left: 10,
      },
      labelStyle: {
        textAlign: "center",
        fontSize: 10,
        marginTop: -5,
        marginHorizontal: -10,
        zIndex: -1,
        fontWeight: '500'
      },
      showIcon: true,
      upperCaseLabel: false,
      indicatorStyle: {
        opacity: 0
      },
      iconStyle: {
        marginVertical: -5
      }
    }
  }
)

export default createAppContainer(AppNavigator);