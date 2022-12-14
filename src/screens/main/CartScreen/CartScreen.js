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

const DATA = [
  {
    id: '111',
    title: 'Fold sack',
    price: 109.5,
    rate: 3.5,
    categoryOfProduct: `Men's Clothes`,
  },
  {
    id: '222',
    title: 'Fold sack',
    price: 109.5,
    rate: 3.5,
    categoryOfProduct: `Men's Clothes`,
  },
  {
    id: '333',
    title: 'Fjallraven - Foldasck ',
    price: 109.5,
    rate: 3.5,
    categoryOfProduct: `Men's Clothes`,
  },
  {
    id: '444',
    title: 'Fold sack',
    price: 109.5,
    rate: 3.5,
    categoryOfProduct: `Men's Clothes`,
  },
  {
    id: '555',
    title: 'Fold sack',
    price: 109.5,
    rate: 3.5,
    categoryOfProduct: `Men's Clothes`,
  },
  {
    id: '666',
    title: 'Fold sack',
    price: 109.5,
    rate: 3.5,
    categoryOfProduct: `Men's Clothes`,
  },
  {
    id: '777',
    title: 'Husam sack',
    price: 109.5,
    rate: 3.5,
    categoryOfProduct: `Men's Clothes`,
  },
  {
    id: '888',
    title: 'Ali sack asdf',
    price: 109.5,
    rate: 3.5,
    categoryOfProduct: `Men's Clothes`,
  },
];

const CartScreen = () => {
  const renderItem = ({item}) => (
    <CustomCartProduct
      productName={item.title}
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
              <Text style={styles.text}>1000.56 $</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Delivery</Text>
              <Text style={styles.text}>1000.56 $</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>1000.56 $</Text>
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
  billStyle:{
    flex: 1,
    justifyContent: 'flex-start',
  },  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  text:{
    fontSize: 16,
    fontWeight: '600',
    color: Colors.gray[600]
  },
  total:{
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
    letterSpacing: .5
  },
});
