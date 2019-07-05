import React from 'react';
import { StyleSheet, ScrollView, Image, AsyncStorage } from 'react-native';
import AntdIcon from "react-native-vector-icons/AntDesign";
import { Block, Text, Button } from '../../constants';
import theme from '../../constants/theme';
import callApi from '../../util/callApi';

import Header from '../../components/Header';

export default class Account extends React.Component {
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

  constructor(props) {
    super(props);

    this.state = {
      displayName: null,
      photoURL: null,
      dateOfJoin: ''
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    // callApi('users', 'GET', null).then(res => {
    //   AsyncStorage.getItem("uid").then(uid => {
    //     const dataFound = res.data.find(item => item.uid == uid)
    //     this.setState({
    //       displayName: dataFound.displayName,
    //       photoURL: dataFound.photoURL,
    //       dateOfJoin: dataFound.dateOfJoin
    //     })
    //   });
    // })

    const displayName = await AsyncStorage.getItem("displayName");
    const photoURL = await AsyncStorage.getItem("photoURL");
    const dateOfJoin = await AsyncStorage.getItem("dateOfJoin");
    
    this.setState({ displayName, photoURL, dateOfJoin })
  };

  logout = async () => {
    try {
      await AsyncStorage.removeItem("displayName");
      await AsyncStorage.removeItem("photoURL");
      
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, photoURL, dateOfJoin } = this.state;
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Button row middle style={styles.button} >
          <Image source={{ uri: photoURL }} style={styles.avatar} />
          <Block>
            <Text marginBottom={5}>
              { displayName }
            </Text>
            <Text fontSize={14} gray2>
              { ` Tham gia từ ${dateOfJoin}` }
            </Text>
          </Block>
        </Button>

        <Button 
          row middle style={styles.button} 
          onPress={() => navigation.navigate("AccountSetting")}
        >
          <AntdIcon 
            name='user' size={16} color='#fff' 
            style={[styles.icon, { backgroundColor: theme.colors.main }]} />
          <Text>Chỉnh sửa thông tin cá nhân</Text>
        </Button>

        <Button 
          row middle style={styles.button} 
          onPress={() => navigation.navigate("SearchedHistories")}
        >
          <AntdIcon 
            name='search1' size={16} color='#fff' 
            style={[styles.icon, { backgroundColor: theme.colors.red }]} />
          <Text>Lịch sử tìm kiếm</Text>
        </Button>

        <Button 
          row middle style={styles.button} 
          onPress={() => navigation.navigate("Notification")}
        >
          <AntdIcon 
            name='bells' size={16} color='#fff' 
            style={[styles.icon, { backgroundColor: theme.colors.blue }]} />
          <Text>Nhận thông báo khi có bài đăng mới</Text>
        </Button>

        <Button 
          row middle style={styles.button} 
          onPress={() => this.logout()}
        >
          <AntdIcon 
            name='logout' size={16} color='#fff' 
            style={[styles.icon, { backgroundColor: theme.colors.purple }]} />
          <Text>Đăng xuất</Text>
        </Button>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  avatar: { 
    width: 40, 
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  button: {
    padding: theme.sizes.base,
    borderBottomWidth: 1, borderBottomColor: '#e1e1e1',
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    textAlign: 'center',
    lineHeight: 30
  }
})