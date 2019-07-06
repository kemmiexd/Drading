import React from "react";
import { StyleSheet, ScrollView, Dimensions, Image, Linking } from "react-native";
import { Block, Text, Button } from "../../constants";
import AntdIcon from "react-native-vector-icons/AntDesign";
import MDIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from "react-native-swiper";
import theme from "../../constants/theme";

const { width } = Dimensions.get("window");

export default class ProductDetail extends React.Component {
  static navigationOptions = () => {
    return {
      title: "Chi tiết bài đăng",
      headerStyle: { backgroundColor: "#fff", height: 60 },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };

  onSavePost() {
    console.log('saved');
  }
  
  onShareFacebook() {
    console.log('share facebook');
  }
  
  onShareMessenger() {
    console.log('share mess');
  }
  
  onShareZalo() {
    console.log('share zalo');
  }

  render() {
    const { product } = this.props.navigation.state.params;
    const priceFormated = product.price
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

    return (
      <Block>
        <ScrollView style={{ backgroundColor: "#f4f4f4" }}>
          <Block>
            <Swiper
              style={styles.swiper}
              showsPagination={true}
              showsButtons={true}
              nextButton={
                <AntdIcon
                  name="right"
                  size={24}
                  color="#fff"
                  style={{ padding: 30, paddingRight: 0 }}
                />
              }
              prevButton={
                <AntdIcon
                  name="left"
                  size={24}
                  color="#fff"
                  style={{ padding: 30, paddingLeft: 0 }}
                />
              }
              paginationStyle={{ bottom: 10 }}
              dotColor="#fff"
              activeDotColor={theme.colors.main}
            >
              {product.images.map(img => {
                return (
                  <Image style={styles.image} source={{ uri: img }} key={img} />
                );
              })}
            </Swiper>
          </Block>

          <Block style={styles.block}>
            <Text bold h3>
              {product.name}
            </Text>

            <Block style={styles.infoTop}>
              <Block>
                <Text style={styles.price}>{`${priceFormated} đ`}</Text>
                <Text caption gray>
                  {product.timestamps}
                </Text>
              </Block>
              <Button 
                style={styles.saveBtn}
                onPress={() => this.onSavePost()}
              >
                <Text main caption>
                  LƯU TIN NÀY
                </Text>
              </Button>
            </Block>

            <Button row middle>
              <Image
                source={{ uri: product.images[0] }}
                style={styles.avatar}
              />
              <Block>
                <Text marginBottom={5}>{`Thái Kem`}</Text>
                <Text fontSize={14} gray2>
                  {` Tham gia từ 26/06/2019`}
                </Text>
              </Block>
            </Button>
          </Block>

          <Block style={styles.block}>
            <Text h3 bold style={{ marginBottom: theme.sizes.base }}>
              Chi tiết bài đăng
            </Text>
            <Text gray style={{ lineHeight: 22 }}>
              {product.description}
            </Text>
          </Block>

          <Block style={styles.block}>
            <Text h3 bold style={{ marginBottom: theme.sizes.base }}>
              Thông tin liên hệ
            </Text>
            <Block row middle style={{ marginBottom: theme.sizes.base / 2 }}>
              <MDIcon
                size={14}
                color={theme.colors.main}
                name="map-marker-outline"
              />
              <Text gray style={{ marginLeft: 5 }}>
                {`Địa chỉ: ${product.address}`}
              </Text>
            </Block>
            <Block row middle>
              <MDIcon size={14} color={theme.colors.main} name="phone" />
              <Text gray style={{ marginLeft: 5 }}>
                {`Số điện thoại: ${product.phone}`}
              </Text>
            </Block>
          </Block>

          <Block style={styles.block}>
            <Text h3 bold style={{ marginBottom: theme.sizes.base }}>
              Chia sẻ bài đăng lên mạng xã hội:
            </Text>
            <Block middle row>
              <Button
                style={[styles.socialBtn, { backgroundColor: "#00458A" }]}
                onPress={() => this.onShareFacebook()}
              >
                <MDIcon size={16} color="#fff" name="facebook" />
              </Button>
              <Button
                style={[styles.socialBtn, { backgroundColor: "#2793FF" }]}
                onPress={() => this.onShareMessenger()}
              >
                <MDIcon size={16} color="#fff" name="facebook-messenger" />
              </Button>
              <Button onPress={() => this.onShareZalo()}>
                <Image
                  source={require("../../assets/images/zalo.png")}
                  style={{ width: 30, height: 30 }}
                />
              </Button>
            </Block>
          </Block>

          <Block style={{ height: 126 }} />
        </ScrollView>

        <Button 
          center middle style={styles.callNow}
          onPress={() => Linking.openURL(`tel:${product.phone}`)}
        >
          <Text white bold>
            GỌI ĐIỆN NGAY
          </Text>
        </Button>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  swiper: {
    width: width,
    height: width * 0.7,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: "100%",
    width: null,
    resizeMode: "cover"
  },
  block: {
    backgroundColor: "#fff",
    padding: theme.sizes.base,
    marginTop: theme.sizes.base
  },
  infoTop: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: theme.sizes.base,
    marginBottom: theme.sizes.base,
    borderBottomColor: "#e1e1e1",
    borderBottomWidth: 0.5
  },
  price: {
    color: theme.colors.main,
    marginBottom: 5
  },
  saveBtn: {
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: theme.colors.main,
    borderWidth: 1,
    borderRadius: 15
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  socialBtn: {
    marginRight: theme.sizes.base,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  callNow: {
    backgroundColor: theme.colors.main,
    height: 40,
    width: width / 2,
    position: 'absolute',
    bottom: 70,
    left: '25%',
    borderRadius: 20,
  }
});
