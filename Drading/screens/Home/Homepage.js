import React from 'react';
import { StyleSheet, FlatList, ImageBackground, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { Block, Text, Button } from '../../constants';
import theme from '../../constants/theme';

import { FlashNews } from '../../components/Home';
import Header from '../../components/Header';
import callApi from '../../util/callApi';

const { width } = Dimensions.get('window');
 
const categories = [
  { _id: 1, url: require('../../assets/images/estate.jpg'), name: 'Bất động sản' },
  { _id: 2, url: require('../../assets/images/cleaning-machine.jpg'), name: 'Máy vệ sinh' },
  { _id: 3, url: require('../../assets/images/cleaning-service.jpg'), name: 'Dịch vụ vệ sinh' },
  { _id: 4, url: require('../../assets/images/technology-item.jpg'), name: 'Điện máy' },
  { _id: 5, url: require('../../assets/images/house-ware.jpg'), name: 'Thiết bị gia dụng' },
];

const news = [
  { id: 1, title: 'Cho thuê nhà nguyên căn HXH đường Phạm Văn Chiêu gần ngã 3 Cây Trâm,P1', location: 'TP. Hồ Chí Minh', time: '5 phút trước' },
  { id: 2, title: 'Cho thuê nhà nguyên căn HXH đường Phạu gần ngã 3 Cây Trâm,P1', location: 'Hà Nội', time: '15 phút trước' },
  { id: 3, title: 'Cho thuê nhà nguyên cường Phạm Văn Chiêu gần ngã 3 Cây Trâm,P1', location: 'Đài Loan', time: '25 phút trước' },
  { id: 4, title: 'Cho thuê nhà nguyên căn HXH đường Phạm Văn Chiêu gần ngã 3 Cây Trâm,P1', location: 'TP. Hồ Chí Minh', time: '5 phút trước' },
  { id: 52, title: 'Cho thuê nhà nguyên căn HXH đường Phạu gần ngã 3 Cây Trâm,P1', location: 'Hà Nội', time: '15 phút trước' },
  { id: 63, title: 'Cho thuê nhà nguyên cường Phạm Văn Chiêu gần ngã 3 Cây Trâm,P1', location: 'Đài Loan', time: '25 phút trước' },
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
      categories: categories,
      news: news
    }
  }

  // componentDidMount() {
  //   this.fetchCategores();
  // }
  
  // fetchCategores = () => {
  //   callApi('categories', 'get', null).then(res => {
  //     this.setState({ categories: res.data });

  //     console.log(res.data);
  //   })
  // }

  logout = async () => {
    try {
      await AsyncStorage.removeItem("displayName");
      await AsyncStorage.removeItem("photoURL");
      
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Block style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        <ScrollView>
          <Button onPress={() => this.logout()}>
            <Text>Logout</Text>
          </Button>

          <FlashNews news={this.state.news} />
          <FlatList 
            data={this.state.categories}
            renderItem={({ item }) => (
              <Button style={styles.box}>
                <ImageBackground source={{ uri: item.image }} style={styles.background} >
                  <Block style={styles.overlay}></Block>
                  <Text bold color="#fff" style={styles.text}>
                    { item.name }
                  </Text>
                </ImageBackground>
              </Button>
            )}
            keyExtractor={item => `${item._id}`}
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
    fontSize: 20,
  }
})