import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block } from '../../constants'
import { Picker, Form } from "native-base";
import theme from '../../constants/theme';

const { width } = Dimensions.get('window');

export default class SortProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Block style={styles.block}>
        <Form>
          <Picker
            mode="dropdown"
            style={styles.picker}
            selectedValue={this.state.selected}
            onValueChange={ value => this.onValueChange(value)}
          >
            <Picker.Item label="Tin mới nhất" value="key0" />
            <Picker.Item label="Giá thấp nhất" value="key1" />
            <Picker.Item label="Giá cao nhất" value="key2" />
          </Picker>
        </Form>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  picker: { 
    width: (width / 2) - (theme.sizes.base * 1.5),
    borderRadius: 3,
    height: 40,
    color: theme.colors.gray
  },
  block: {
    backgroundColor: '#fff',
    width: (width / 2) - (theme.sizes.base * 1.5),
    borderRadius: 3,
    height: 40,
    marginHorizontal: theme.sizes.base / 2,
  }
})