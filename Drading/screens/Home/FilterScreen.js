import React from 'react';
import { StyleSheet, Dimensions, TextInput } from 'react-native';
import { Block, Text } from '../../constants';
import theme from '../../constants/theme';
import MDIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon, Picker, Form, Item } from "native-base";

const { width } = Dimensions.get('window');

export default class Product extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Lọc bài viết",
      headerStyle: { backgroundColor: "#fff", height: 60, },
      headerTintColor: "gray",
      headerBackTitleStyle: { display: "none" }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      location: "0",
      category: "0"
    };
  }

  onChangeLocation(value) {
    this.setState({
      location: value
    });
  }

  onChangeCategory(value) {
    this.setState({
      category: value
    });
  }

  render() {
    return (
      <Block style={{ backgroundColor: '#f4f4f4' }}>
        <Form>
          <Text gray style={styles.title}>Vị trí:</Text>
          <Item style={styles.item}>
            <Picker
              style={styles.picker}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={this.state.location}
              onValueChange={value => this.onChangeLocation(value)}
            >
              <Picker.Item label="Toàn quốc" value="0" />
              <Picker.Item label="ATM Card" value="1" />
              <Picker.Item label="Debit Card" value="2" />
              <Picker.Item label="Credit Card" value="3" />
              <Picker.Item label="Net Banking" value="4" />
            </Picker>
          </Item>

          <Text gray style={styles.title}>Danh mục con:</Text>
          <Item style={styles.item}>
            <Picker
              style={styles.picker}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={this.state.category}
              onValueChange={value => this.onChangeCategory(value)}
            >
              <Picker.Item label="Tất cả danh mục" value="0" />
              <Picker.Item label="ATM Card" value="1" />
              <Picker.Item label="Debit Card" value="2" />
              <Picker.Item label="Credit Card" value="3" />
              <Picker.Item label="Net Banking" value="4" />
            </Picker>
          </Item>

          <Text gray style={styles.title}>Khoảng giá:</Text>
          <Block row marginHorizontal={theme.sizes.base / 2} style={{ justifyContent: 'space-between', }}>
            <Block style={styles.inputBlock}>
              <Text gray2>Từ:</Text>
              <TextInput 
                style={styles.input}
                onChangeText={this.onChangeFrom}
                keyboardType='numeric'
              />
            </Block>
            <Block style={styles.inputBlock}>
              <Text gray2>Đến:</Text>
              <TextInput 
                style={styles.input}
                onChangeText={this.onChangeFrom}
                keyboardType='numeric'
              />
            </Block>
          </Block>
        </Form>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  picker: {
    width: width - (theme.sizes.base * 2),
    height: 40,
    color: theme.colors.gray
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 3,
    borderBottomColor: 'transparent',
    width: width - (theme.sizes.base * 2),
    margin: theme.sizes.base,
    height: 40,
  },
  title: {
    marginLeft: theme.sizes.base,
    marginTop: theme.sizes.base * 1.5
  },
  inputBlock: { 
    width: width - (theme.sizes.base * 2), 
    marginHorizontal: theme.sizes.base / 2,
    marginTop: theme.sizes.base
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    marginTop: theme.sizes.base / 2,
    borderRadius: 3,
    paddingHorizontal: theme.sizes.base,
    color: theme.colors.gray
  }
})