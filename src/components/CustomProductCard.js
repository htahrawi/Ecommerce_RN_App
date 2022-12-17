import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';
import CustomButton from './CustomButton';

const {width, height} = Dimensions.get('window');
// To let the first char capital
const toUpperCaseChar = (text)=>{
   const arr = text.split(' ');
   let textCamel ='';
   for (let i = 0; i < arr.length; i++) {
    const firstChar = arr[i][0].toUpperCase();
    textCamel += firstChar + arr[i].slice(1) + ' ';
   }
   textCamel = textCamel.trim();
   return textCamel;
}
const CustomProductCard = ({
  productName,
  categoryOfProduct,
  price,
  rate,
  image,
  id,
  onPress,
}) => {

  const camelCategoryOfProduct = toUpperCaseChar(categoryOfProduct);
  return (
    <View
      style={styles.productItem}
      activeOpacity={0.6}
      // onPress={onPress}
      id={id}>
      <Image
        source={{uri: image}}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productInfoContainer}>
        <Text numberOfLines={1} style={styles.productTitle}>
          {productName.slice(0, 20)}
        </Text>
        <Text style={styles.categoryOfProduct}>{camelCategoryOfProduct}</Text>
      </View>
      <View style={styles.ratePriceContainer}>
        <Text style={styles.price}>{price}$</Text>
        <View style={styles.rateContainer}>
          <Image
            source={require('../assets/icons/star.png')}
            style={styles.starIcon}
            resizeMode="contain"
          />
          <Text style={styles.rate}>{rate}</Text>
        </View>
      </View>
      <CustomButton
        title={'Buy Now'}
        myBtnStyle={{
          width: width * 0.3,
          height: height * 0.039,
          paddingVertical: 4,
        }}
        myTxtStyle={{
          fontSize: 15,
          fontWeight: '400',
          // lineHeight: 18,
        }}
        onPress={onPress}
      />
    </View>
  );
};

export default CustomProductCard;

const styles = StyleSheet.create({
  productItem: {
    padding: 10,
    backgroundColor: Colors.white,
    width: '45%',
    height: height * 0.25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  productImage: {
    width: width * 0.15,
    height: height * 0.1,
  },
  productTitle: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '600',
    // lineHeight: 22,
    letterSpacing: 0.32,
    // padding: 10,
  },
  categoryOfProduct: {
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.32,
    textAlign: 'center',
    // lineHeight: 14,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    letterSpacing: 1,
    // lineHeight: 16,
  },
  ratePriceContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  starIcon: {
    width: 15,
    height: 15,
  },
  rate: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
    paddingHorizontal: 2,
  },
});
