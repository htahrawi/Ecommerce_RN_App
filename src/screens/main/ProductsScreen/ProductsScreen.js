import {ActivityIndicator, FlatList, StatusBar, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../../theme/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomProductCard} from '../../../components';
import axios from 'axios';

const ProductsScreen = props => {
  const [products, setProducts] = useState([]);
  let sortedProducts = [];
  let [categoryName, setCategoryName] = useState('All');

  try {
    categoryName = props.route.params.categoryName; 
  } catch (error) {
    console.log("Show All Products");
  }

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }, []);
  
  if (categoryName != 'All') {
    products.forEach(item =>{
      if (item.category === categoryName) {
        sortedProducts.push(item)
      }
    })
  }
  // categoryName? console.log(categoryName, " EXist"): null;

  const renderItem = ({item}) => (
    <CustomProductCard
      id={item.id}
      productName={item.title}
      price={item.price}
      rate={item.rating.rate}
      categoryOfProduct={item.category}
      image={item.image}
      onPress={() =>
        props.navigation.navigate('productDetails', {
          id: item.id,
          title: item.title,
          descreption: item.description,
          price: item.price,
          categoryOfProduct: item.category,
          image: item.image,
          rate: item.rating.rate,
        })
      }
    />
  );
  return (
    <SafeAreaView stylex={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      {products && products.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categoryName=='All'? products: sortedProducts}
          style={styles.productsWrapper}
          renderItem={renderItem}
          keyExtractor={Item => Item.id}
          numColumns={2}
        />
      ) : (
        <ActivityIndicator size={'large'} color={Colors.primary} />
      )}
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.secondry,
    // backgroundColor: '#aa2',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 0,
    paddingVertical: 20,
    flex: 1
  },
  productsWrapper: {
    width: '100%',
    height: '100%',
    // paddingVertical: 20,
    backgroundColor: Colors.secondry,
  },
});
