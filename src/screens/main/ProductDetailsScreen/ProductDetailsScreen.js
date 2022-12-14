import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Colors from '../../../theme/Colors';
import { CustomButton } from '../../../components';

const {width, height} = Dimensions.get('window');

const ProductDetailsScreen = () => {
  const [quantity, setQuantity] = useState(0);
  const handleOnPressIncrease = ()=>{
    setQuantity(quantity+1);
  }
  const handleOnPressdecrease = ()=>{
    if (quantity!=0) {
      setQuantity(quantity-1)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productDetailsContainer}>
        <Image
          source={require('../../../assets/images/product.png')}
          resizeMode="contain"
          style={styles.productImage}
        />
        <View style={styles.productInfoContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
            <Text numberOfLines={1} style={styles.productTitle}>
              Fjallaraven - Foldsack...
            </Text>
            <View style={styles.rateContainer}>
              <Image
                source={require('../../../assets/icons/star.png')}
                style={styles.starIcon}
                resizeMode="contain"
              />
              <Text style={styles.rate}>3.9</Text>
            </View>
          </View>
          <Text style={styles.categoryOfProduct}>Men's Clothes</Text>
          <Text style={styles.price}>109.95 $</Text>
        </View>
      </View>
      <View style={styles.descreptionContainer}>
        <View>
          <Text style={styles.label}>Product Name</Text>
          <Text numberOfLines={3} style={styles.fullName}>
            Fjallaraven - Foldsack... asdf asdf aas dfsdddddd asdfddas asdf sadb
            asdf asdf
          </Text>
        </View>
        <View>
          <Text style={styles.label}>Product Description</Text>
          <Text numberOfLines={10} style={styles.fullName}>
            Fjallaraven - Foldsack... asdf asdf aas dfsdddddd asdfddas asdf sadb
            asdf asdfasd asdf asdfa asdasdfasd addddddd asdfa ljasdfj lkasdk
            asdlkas aslkdf asldk asdfl asfdddddddddddd asdf asdddddddddd as
            asdddddddd asddddddssa asdf asddsad Fjallaraven - Foldsack asdf asdf
            aas dfsdddddd asdfddas asdf sadb asdf asdfasd asdf asdfa asdasdfasd
            addddddd asdfa ljasdfj lkasdk asdlkas aslkdf asldk asdfl
            asfdddddddddddd asdf asdddddddddd as asdddddddd asddddddssa asdf
            asddsad Fjallaraven -
          </Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.label}>Product Quantity</Text>
          <View style={styles.counter}>
            <CustomButton
              title="-"
              myBtnStyle={{width: 50}}
              myTxtStyle={{fontSize: 22, fontWeight: 'bold'}}
              onPress={handleOnPressdecrease}
            />
            <Text style={styles.countNumber}>{quantity}</Text>
            <CustomButton
              title="+"
              myBtnStyle={{width: 50}}
              onPress={handleOnPressIncrease}
            />
          </View>
        </View>
        <CustomButton title={'Add to Cart'} myBtnStyle={{width: '100%'}} />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primary,
  },
  productDetailsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: width * 0.94,
    height: height * 0.17,
    marginVertical: height * 0.02,
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  productImage: {
    height: '100%',
    width: '20%',
    marginRight: 10,
  },
  productInfoContainer: {
    flex: 2,
    justifyContent: 'space-around',
  },
  productTitle: {
    color: Colors.black,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  TitleRateContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  categoryOfProduct: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.32,
    textAlign: 'left',
    color: Colors.gray[400],
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
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

  // Product Details Description
  descreptionContainer: {
    backgroundColor: Colors.white,
    width: width,
    // height: '100%',
    borderRadius: 50,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    padding: 30,
    justifyContent: 'space-around',
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.gray[500],
  },
  fullName: {
    fontSize: 16,
    color: Colors.gray[400],
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  counter: {
    flexDirection: 'row',
    backgroundColor: Colors.secondry,
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'center',
    width: '50%'
  },
  countNumber:{
    fontSize: 22,
    color: Colors.white,
    fontWeight: 'bold'
  }
});
