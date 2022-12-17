import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const toUpperCaseChar = text => {
  const arr = text.split(' ');
  let textCamel = '';
  for (let i = 0; i < arr.length; i++) {
    const firstChar = arr[i][0].toUpperCase();
    textCamel += firstChar + arr[i].slice(1) + ' ';
  }
  textCamel = textCamel.trim();
  return textCamel;
};

const CustomProductItem = ({title, categoryOfProduct, price, rate, image, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topProductsContainer}>
      <View style={styles.productContainer}>
        <Image
          source={{uri: image}}
          style={styles.productImage}
          resizeMode="contain"
        />
        <View style={styles.productInfoContainer}>
          <Text numberOfLines={1} style={styles.productTitle}>
            {title.slice(0,20)}
          </Text>
          <Text style={styles.categoryOfProduct}>{toUpperCaseChar(categoryOfProduct)}</Text>
          <Text style={styles.price}>{price} $</Text>
        </View>
        <View>
          <View style={styles.rateContainer}>
            <Image
              source={require('../assets/icons/star.png')}
              style={styles.starIcon}
              resizeMode="contain"
            />
            <Text style={styles.rate}>{rate}</Text>
          </View>
          <CustomButton
            title={'Buy Now'}
            myBtnStyle={{width: '100%', height: height * 0.055, padding: 12, paddingVertical: 10}}
            myTxtStyle={{fontWeight: '500', fontSize: 18, alignSelf: 'center'}}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomProductItem;

const styles = StyleSheet.create({
  // Product Styling
  topProductsContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productImage: {
    width: 50,
    height: 80,
    marginHorizontal: 10,
    
  },
  productInfoContainer: {
    paddingVertical: 10,
  },
  productTitle: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: 1,
  },
  categoryOfProduct: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1,
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    letterSpacing: 1,
    lineHeight: 16,
    marginTop: 8,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'flex-end',
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
  rate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
