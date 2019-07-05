import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Block, Text, Button } from '../../constants';
import { Tab, Tabs } from 'native-base';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from '../../constants/theme';

import { SortProduct } from '../../components/Home';

const { width } = Dimensions.get('window');

export default class Product extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.categoryName,
      headerStyle: { backgroundColor: "#fff", height: 60, },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };

  render() {
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
            <Block>
              <Text>Hello mua</Text>
            </Block>
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