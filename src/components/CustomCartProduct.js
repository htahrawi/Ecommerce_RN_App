import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../theme/Colors';
import {CustomButton} from '../components';

const {width, height} = Dimensions.get('window');

const CustomCardProduct = ({productName, categoryOfProduct, price }) => {
  const [quantity, setQuantity] = useState(1);
  const handleOnPressIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleOnPressdecrease = () => {
    if (quantity != 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View>
      <View style={styles.productDetailsContainer}>
        <Image
          source={require('../assets/images/product.png')}
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
              {productName}
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/icons/cancel.png')}
                style={styles.cancelIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.categoryOfProduct}>{categoryOfProduct}</Text>
            <Text style={styles.price}>{price} $</Text>
          </View>
          <View style={styles.quantityContainer}>
            <View style={styles.counter}>
              <CustomButton
                title="-"
                myBtnStyle={styles.btnCounterStyle}
                onPress={handleOnPressdecrease}
              />
              <Text style={styles.countNumber}>{quantity}</Text>
              <CustomButton
                title="+"
                myBtnStyle={styles.btnCounterStyle}
                onPress={handleOnPressIncrease}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomCardProduct;

const styles = StyleSheet.create({
  productDetailsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: width * 0.94,
    height: height * 0.17,
    marginVertical: height * 0.012,
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
    justifyContent: 'space-between',
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
  cancelIcon: {
    width: 15,
    height: 15,
  },
  rate: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
    paddingHorizontal: 2,
  },
  btnCounterStyle: {
    width: 35,
    height: 35,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  counter: {
    flexDirection: 'row',
    backgroundColor: Colors.secondry,
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
  },
  countNumber: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: 'bold',
  },
});
