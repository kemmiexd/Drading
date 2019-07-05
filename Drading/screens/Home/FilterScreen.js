import React from 'react';
import { StyleSheet, Dimensions, TextInput } from 'react-native';
import { Block, Text, Button } from '../../constants';
import theme from '../../constants/theme';
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
      category: "0",
      priceFrom: '',
      priceTo: ''
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

  onChangeFrom(value) {
    this.setState({
      priceFrom: value
    });
  }

  onChangeTo(value) {
    this.setState({
      priceTo: value
    });
  }

  onSubmitForm() {
    const { location, category, priceFrom, priceTo } = this.state;

    this.props.navigation.navigate('Product', {
      location, category, priceFrom, priceTo
    });
  }

  render() {
    const { location, category, priceFrom, priceTo } = this.state;
 
    return (
      <Block style={{ backgroundColor: '#f4f4f4' }}>
        <Form>
          <Text gray style={styles.title}>Vị trí:</Text>
          <Item style={styles.item}>
            <Picker
              style={styles.picker}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={location}
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
              selectedValue={category}
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
          <Block 
            row marginHorizontal={theme.sizes.base / 2} 
            style={{ justifyContent: 'space-between' }}
          >
            <Block style={styles.inputBlock}>
              <Text gray2>Từ:</Text>
              <TextInput 
                style={styles.input}
                onChangeText={value => this.onChangeFrom(value)}
                value={priceFrom}
                keyboardType='numeric'
              />
            </Block>
            <Block style={styles.inputBlock}>
              <Text gray2>Đến:</Text>
              <TextInput 
                style={styles.input}
                onChangeText={value => this.onChangeTo(value)}
                value={priceTo}
                keyboardType='numeric'
              />
            </Block>
          </Block>

          <Button 
            middle center style={styles.submitBtn}
            onPress={() => this.onSubmitForm()}
          >
            <Text white>LỌC</Text>
          </Button>
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
  },
  submitBtn: {
    height: 50,
    width: width - theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base,
    backgroundColor: theme.colors.main,
    borderRadius: 3,
    marginTop: 100
  }
})