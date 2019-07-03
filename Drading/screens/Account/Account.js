import React from 'react';
import { StyleSheet, ScrollView, Image, AsyncStorage } from 'react-native';
import { Block, Text, Button } from '../../constants';
import theme from '../../constants/theme';

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
    try {
      const displayName = await AsyncStorage.getItem("displayName");
      const photoURL = await AsyncStorage.getItem("photoURL");
      const dateOfJoin = await AsyncStorage.getItem("dateOfJoin");
      if (displayName !== null && photoURL !== null) {
        this.setState({
          displayName,
          photoURL,
          dateOfJoin
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, photoURL, dateOfJoin } = this.state;

    return (
      <ScrollView>
        <Button row middle style={styles.button} >
          <Image source={{ uri: photoURL }} style={styles.avatar} />
          <Block>
            <Text marginBottom={5}>
              { displayName }
            </Text>
            <Text fontSize={12} gray2>
              { ` Tham gia từ ${dateOfJoin}` }
            </Text>
          </Block>
        </Button>
        <Button row middle style={styles.button} >
          <Image source={{ uri: photoURL }} style={styles.avatar} />
          <Block>
            <Text marginBottom={5}>
              { displayName }
            </Text>
            <Text fontSize={12} gray2>
              { ` Tham gia từ ${dateOfJoin}` }
            </Text>
          </Block>
        </Button>
        <Button row middle style={styles.button} >
          <Image source={{ uri: photoURL }} style={styles.avatar} />
          <Block>
            <Text marginBottom={5}>
              { displayName }
            </Text>
            <Text fontSize={12} gray2>
              { ` Tham gia từ ${dateOfJoin}` }
            </Text>
          </Block>
        </Button>
        <Button row middle style={styles.button} >
          <Image source={{ uri: photoURL }} style={styles.avatar} />
          <Block>
            <Text marginBottom={5}>
              { displayName }
            </Text>
            <Text fontSize={12} gray2>
              { ` Tham gia từ ${dateOfJoin}` }
            </Text>
          </Block>
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
  }
})