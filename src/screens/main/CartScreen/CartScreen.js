import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  Text,
} from 'react-native';
import React from 'react';
import Colors from '../../../theme/Colors';
import CustomCartProduct from '../../../components/CustomCartProduct';
import {CustomButton} from '../../../components';
import {useContext} from 'react';
import {CartContext} from '../../../store/context/cartContext';

const CartScreen = () => {
  const cart = useContext(CartContext);
  const DATA = cart.cart;
  const totalPrice = cart.total;
  console.log('totalPrice', totalPrice);

  console.log('DATA', DATA);

  const renderItem = ({item}) => (
    <CustomCartProduct
      id={item.id}
      productName={item.title.slice(0,20)}
      categoryOfProduct={item.categoryOfProduct}
      price={item.price}
    />
  );

  return (
    <View>
      <StatusBar backgroundColor={Colors.primary} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={Item => Item.id}
          showsVerticalScrollIndicator={false}
        />
        <View
          style={{
            padding: 20,
            width: '100%',
            height: 200,
            backgroundColor: Colors.secondry,
            justifyContent: 'space-between',
          }}>
          <View style={styles.billStyle}>
            <View style={styles.row}>
              <Text style={styles.text}>Sub-total</Text>
              <Text style={styles.text}>0 $</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Delivery</Text>
              <Text style={styles.text}>0 $</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>{totalPrice} $</Text>
            </View>
          </View>
          <CustomButton title="Checkout" myBtnStyle={{width: '100%'}} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.secondry,
  },
  billStyle: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.gray[600],
  },
  total: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
    letterSpacing: 0.5,
  },
});
