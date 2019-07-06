import React from 'react';
import { StyleSheet, ScrollView, Dimensions, FlatList } from 'react-native';
import { Block, Text, Button } from '../../constants';
import { Tab, Tabs } from 'native-base';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from '../../constants/theme';

import { SortProduct, ProductItem } from '../../components/Home';

const { width } = Dimensions.get('window');

const products = [
  {
    id: 1,
    name: 'Tuyển tài xế, lơ xe làm ở Bình Dương lương cao phát lương tuần',
    images: [
      'http://lorempixel.com/400/400/', 
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ],
    price: 15000000,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    address: 'Quận 1, TP. HCM',
    phone: '0912 345 678',
    cateId: '1',
    userId: '1',
    onHome: 0,
    timestamps: '05/07/2019',
    sellOrBuy: 1
  },
  {
    id: 2,
    name: 'A long established fact that a reader will be distracted by the readable content of a page when looking at its layou',
    images: [
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'http://lorempixel.com/400/400/', 
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ],
    price: 10000000,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    address: 'Quận 1, TP. HCM',
    phone: '0912 345 678',
    cateId: '1',
    userId: '1',
    onHome: 0,
    timestamps: '05/07/2019',
    sellOrBuy: 0
  },
  {
    id: 3,
    name: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    images: [
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'http://lorempixel.com/400/400/', 
    ],
    price: 16000000,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    address: 'Quận 1, TP. HCM',
    phone: '0912 345 678',
    cateId: '1',
    userId: '1',
    onHome: 0,
    timestamps: '05/07/2019',
    sellOrBuy: 0
  },
  {
    id: 4,
    name: 'Tuyển tài xế, lơ xe làm ở Bình Dương lương cao phát lương tuần',
    images: [
      'http://lorempixel.com/400/400/', 
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ],
    price: 15000000,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    address: 'Quận 1, TP. HCM',
    phone: '0912 345 678',
    cateId: '1',
    userId: '1',
    onHome: 0,
    timestamps: '05/07/2019',
    sellOrBuy: 1
  },
  {
    id: 5,
    name: 'A long established fact that a reader will be distracted by the readable content of a page when looking at its layou',
    images: [
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'http://lorempixel.com/400/400/', 
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ],
    price: 10000000,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    address: 'Quận 1, TP. HCM',
    phone: '0912 345 678',
    cateId: '1',
    userId: '1',
    onHome: 0,
    timestamps: '05/07/2019',
    sellOrBuy: 0
  },
  {
    id: 6,
    name: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
    images: [
      'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'http://lorempixel.com/400/400/', 
    ],
    price: 16000000,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    address: 'Quận 1, TP. HCM',
    phone: '0912 345 678',
    cateId: '1',
    userId: '1',
    onHome: 0,
    timestamps: '05/07/2019',
    sellOrBuy: 0
  },
]
export default class Product extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.categoryName,
      headerStyle: { backgroundColor: "#fff", height: 60, },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      products: products
    }
  }

  render() {
    // console.log(this.props.navigation);
    const { products } = this.state;
    const { navigation } = this.props;
    
    return (
      <Tabs tabBarUnderlineStyle={{ borderBottomColor: theme.colors.main, borderBottomWidth: 1 }}>
        <Tab 
          heading="CẦN BÁN" 
          textStyle={{ color: theme.colors.gray }} 
          tabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: theme.colors.main }}
          activeTabStyle={{ backgroundColor: '#fff' }}
        >
          <ScrollView style={{ backgroundColor: '#f4f4f4' }}>
            <Block 
              row paddingHorizontal={theme.sizes.base / 2} marginTop={theme.sizes.base} 
              style={{ justifyContent: 'space-between' }}
            >
              <Button 
                row middle style={styles.filterBtn}
                onPress={() => this.props.navigation.navigate('FilterScreen')}
              >
                <Text>Lọc</Text>
                <Icon name="filter-outline" color={theme.colors.gray} size={14} />
              </Button>
              <SortProduct />
            </Block>

              <FlatList 
                data={products}
                renderItem={({ item }) => (
                  item.sellOrBuy === 0 && (
                    <ProductItem product={item} navigation={navigation} />
                  )
                )}
                keyExtractor={item => `key-${item.id}`}
              />
            <Block style={{ height: 80 }} />
          </ScrollView>
        </Tab>
        <Tab 
          heading="CẦN MUA" 
          textStyle={{ color: theme.colors.gray }} 
          tabStyle={{ backgroundColor: '#fff' }}
          activeTextStyle={{ color: theme.colors.main }}
          activeTabStyle={{ backgroundColor: '#fff' }}
        >
          <ScrollView style={{ backgroundColor: '#f4f4f4' }}>
            <Block 
              row paddingHorizontal={theme.sizes.base / 2} marginTop={theme.sizes.base} 
              style={{ justifyContent: 'space-between' }}
            >
              <Button 
                row middle style={styles.filterBtn}
                onPress={() => this.props.navigation.navigate('FilterScreen')}
              >
                <Text>Lọc</Text>
                <Icon name="filter-outline" color={theme.colors.gray} size={14} />
              </Button>
              <SortProduct />
            </Block>
            
            <FlatList 
              data={products}
              renderItem={({ item }) => (
                item.sellOrBuy === 1 && (
                  <ProductItem product={item} navigation={navigation} />
                )
              )}
              keyExtractor={item => `key-${item.id}`}
            />

            <Block style={{ height: 80 }} />
          </ScrollView>
        </Tab>
      </Tabs>
    )
  }
}

const styles = StyleSheet.create({
  filterBtn: {
    backgroundColor: '#fff',
    width: (width / 2) - (theme.sizes.base * 1.5),
    borderRadius: 3,
    height: 40,
    marginHorizontal: theme.sizes.base / 2,
    justifyContent: 'space-between',
    paddingHorizontal: theme.sizes.base
  }
})