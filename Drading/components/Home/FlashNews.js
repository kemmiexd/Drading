import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, Text, Button } from '../../constants';
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/Ionicons";
import MDIcon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from '../../constants/theme';


export default function FlashNews(props) {
  const { news } = props;

  return (
    <Block style={styles.flashNews}>
      <Block style={styles.title}>
        <Icon size={16} color="#fff" name="ios-flash" />
        <Text style={{ fontSize: 16, color: '#fff', marginLeft: 16, }}>
          Tin ưu tiên
        </Text>
      </Block>

      <Swiper 
        style={styles.swiper}
        loop={true}
        autoplay={true}
        autoplayTimeout={3}
        showsPagination={true}
        paginationStyle={{ bottom: 5 }}
        activeDotColor={theme.colors.main}
      >
        {
          news.map(newsItem => {
            return (
              <Block style={styles.swiperItem} key={newsItem.id}>
                <Text center gray numberOfLines={2} height={24}>
                  { newsItem.title }
                </Text>
                <Block row space-between marginTop={theme.sizes.base}>
                  <Block row middle left>
                    <MDIcon name="map-marker-outline" size={16} color={theme.colors.main} />
                    <Text gray2 style={{ marginLeft: 5 }}> 
                    { newsItem.location }
                    </Text>
                  </Block>
                  <Block row middle right>
                    <MDIcon name="clock-outline" size={16} color={theme.colors.main} />
                    <Text gray2 style={{ marginLeft: 5 }}> 
                    { newsItem.time }
                    </Text>
                  </Block>
                </Block>
              </Block>
            )
          })
        }
        
      </Swiper>
    </Block>
  )
}

const styles = StyleSheet.create({
  swiperItem: {
    flex: 1,
    padding: theme.sizes.base / 2,
  },
  flashNews: {
    flex: 1,
    height: 180,
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