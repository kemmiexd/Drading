import React from "react";
import { StyleSheet, Image, AsyncStorage } from "react-native";
import { Block, Text, Button } from "../constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../constants/theme";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: null,
      photoURL: null
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    try {
      const displayName = await AsyncStorage.getItem("displayName");
      const photoURL = await AsyncStorage.getItem("photoURL");
      if (displayName !== null && photoURL !== null) {
        this.setState({
          displayName,
          photoURL
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { navigation } = this.props;
    const { displayName, photoURL } = this.state;

    return (
      <Block row padding={[0, theme.sizes.base]} style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.img}
        />
        {displayName !== null && photoURL !== null ? (
          <Button row middle onPress={() => navigation.navigate("Account")}>
            <Text
              size={theme.sizes.font}
              style={styles.name}
            >
              {displayName}
            </Text>
            <Image source={{ uri: photoURL }} style={styles.avatar} />
          </Button>
        ) : (
          <Button row middle onPress={() => navigation.navigate("Login")}>
            <Text
              size={theme.sizes.font}
              style={styles.name}
            >
              Đăng nhập
            </Text>
            <Icon name="account-circle-outline" size={20} color="gray" />
          </Button>
        )}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center"
  },
  img: {
    height: 35,
    width: 125,
    resizeMode: "contain"
  },
  name: { 
    marginRight: 10, 
    color: "gray" 
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10
  }
});
