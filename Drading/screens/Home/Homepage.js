import React from 'react';
import { StyleSheet, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Block, Text, Button } from '../../constants';
import theme from '../../constants/theme';
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/Ionicons";

import Header from '../../components/Header';

const { width } = Dimensions.get('window');
 
const categories = [
  { id: 1, url: require('../../assets/estate.jpg'), name: 'Bất động sản' },
  { id: 2, url: require('../../assets/cleaning-machine.jpg'), name: 'Máy vệ sinh' },
  { id: 3, url: require('../../assets/cleaning-service.jpg'), name: 'Dịch vụ vệ sinh' },
  { id: 4, url: require('../../assets/technology-item.jpg'), name: 'Điện máy' },
  { id: 5, url: require('../../assets/house-ware.jpg'), name: 'Thiết bị gia dụng' },
]

export default class Homepage extends React.Component {
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
      categories: categories
    }
  }

  render() {
    return (
      <Block style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        <ScrollView>
          <Block style={styles.flashNews}>
            <Block style={styles.title}>
              <Icon size={16} color="#fff" name="ios-flash" />
              <Text style={{ fontSize: 16, color: '#fff', marginLeft: 16, }}>
                Tin ưu tiên
              </Text>
            </Block>
            <Swiper style={styles.swiper} showsButtons={true}>
              <Block style={styles.swiperItem}>
                <Text>Cho thuê nhà nguyên căn HXH đường Phạm Văn Chiêu gần ngã 3 Cây Trâm,P1</Text>
              </Block>
              <Block style={styles.swiperItem}>
                <Text>Cho thuê nhà nguyên căn HXH đường Phạm Văn Chiêu gần ngã 3 Cây Trâm,P1</Text>
              </Block>
              <Block style={styles.swiperItem}>
                <Text>Cho thuê nhà nguyên căn HXH đường Phạm Văn Chiêu gần ngã 3 Cây Trâm,P1</Text>
              </Block>
            </Swiper>
          </Block>
          <FlatList 
            data={categories}
            renderItem={({ item }) => (
              <Button style={styles.box}>
                <ImageBackground source={item.url} style={styles.background} >
                  <Block style={styles.overlay}></Block>
                  <Text color="#fff" style={styles.text}>
                    { item.name }
                  </Text>
                </ImageBackground>
              </Button>
            )}
            keyExtractor={item => `${item.id}`}
          />
          <Block style={{ height: 60, }} />
        </ScrollView>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    width: width - (theme.sizes.base * 2),
    height: width / 3,
    margin: theme.sizes.base,
    borderRadius: 5,
    overflow: 'hidden',
  },
  background: {
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  overlay: { 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    position: 'absolute', 
    width: '100%', 
    height: '100%' 
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
  },
  swiperItem: {
    flex: 1,
  },
  flashNews: {
    flex: 1,
    height: 160,
    margin: theme.sizes.base,
    marginBottom: theme.sizes.base / 2,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden'
  },
  title: {
    flex: .5,
    backgroundColor: theme.colors.main,
    paddingHorizontal: theme.sizes.base,
    alignItems: 'center',
    flexDirection: 'row',
  }
})