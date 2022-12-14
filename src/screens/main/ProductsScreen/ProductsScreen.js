import {FlatList, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../../theme/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomProductCard} from '../../../components';

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


const ProductsScreen = () => {
  const renderItem = ({item}) => (
    <CustomProductCard
      productName={item.title}
      price={item.price}
      rate={item.rate}
      categoryOfProduct={item.categoryOfProduct}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        style={styles.productsWrapper}
        renderItem={renderItem}
        keyExtractor={Item => Item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondry,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 0,
    paddingHorizontal: 10,
  },
  productsWrapper: {
    paddingTop: 10,
  },
});
