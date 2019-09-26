import React from 'react';
import { StyleSheet, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Block, Text, Button } from '../../constants';
import theme from '../../constants/theme';

import { FlashNews } from '../../components/Home';
import Header from '../../components/Header';
import callApi from '../../util/callApi';

const { width } = Dimensions.get('window');
 
const categories = [
  { _id: 1, image: require('../../assets/images/estate.jpg'), name: 'Bất động sản' },
  { _id: 2, image: require('../../assets/images/cleaning-machine.jpg'), name: 'Máy vệ sinh' },
  { _id: 3, image: require('../../assets/images/cleaning-service.jpg'), name: 'Dịch vụ vệ sinh' },
  { _id: 4, image: require('../../assets/images/technology-item.jpg'), name: 'Điện máy' },
  { _id: 5, image: require('../../assets/images/house-ware.jpg'), name: 'Thiết bị gia dụng' },
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

  render() {
    const { navigation } = this.props;

    return (
      <Block style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        <ScrollView>
          <FlashNews news={this.state.news} />

          <FlatList 
            data={this.state.categories}
            renderItem={({ item }) => (
              <Button 
                style={styles.box}
                onPress={() => navigation.navigate('Product', {
                  categoryId: item.id,
                  categoryName: item.name
                })}
              >
                <ImageBackground source={item.image} style={styles.background} >
                  <Block style={styles.overlay}></Block>
                  <Text bold color="#fff" style={styles.text}>
                    { item.name }
                  </Text>
                </ImageBackground>
              </Button>
            )}
            keyExtractor={item => `${item._id}`}
          />
          <Block style={{ height: 120, }} />
        </ScrollView>

        <Button 
          center middle style={styles.postNow}
          onPress={ () => navigation.navigate('NewPostScreen') }
        >
          <Text white bold>ĐĂNG TIN NGAY</Text>
        </Button>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    width: width - (theme.sizes.base * 2),
    height: width / 3,
    margin: theme.sizes.base,
    marginBottom: theme.sizes.base / 3,
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
  },
  postNow: {
    backgroundColor: theme.colors.main,
    height: 40,
    width: width / 2,
    position: 'absolute',
    bottom: 70,
    left: '25%',
    borderRadius: 20,
  }
})