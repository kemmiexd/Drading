import React from 'react';
import { StyleSheet, Image, Text as TextRN } from 'react-native';
import { Block, Text, Button } from '../../constants';
import theme from '../../constants/theme';

const formatPrice = price => {
  return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default function FlashNews(props) {
  const { product, navigation } = props;
  
  return (
    <Button 
      row style={styles.box}
      onPress={() => navigation.navigate('ProductDetail', {
        product: product
      })}
    >
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <Block>
        <TextRN numberOfLines={2}>
          { product.name }
        </TextRN>
        <Text medium color={theme.colors.main} style={{ marginVertical: 10, }}>
          { `${formatPrice(product.price)} đ` }
        </Text>
        <Text gray>
          {`${product.timestamps} - ${product.address}`}
        </Text>
      </Block>
    </Button>
  )
}

const styles = StyleSheet.create({
  box: { 
    backgroundColor: '#fff' ,
    padding: theme.sizes.base,
    marginTop: theme.sizes.base
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: theme.sizes.base,
    resizeMode: 'cover'
  }
})