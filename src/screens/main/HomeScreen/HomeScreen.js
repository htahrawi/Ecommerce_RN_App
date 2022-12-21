import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../../theme/Colors';
import {CustomProductItem} from '../../../components';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height} = Dimensions.get('window');

// to let the first char capital
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



const HomeScreen = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const Category = ({name}) => (
    <TouchableOpacity
      style={styles.catergory}
      onPress={() => {
        navigation.navigate('Products', {categoryName: name});
      }}>
      <Text style={styles.categoryName}>{toUpperCaseChar(name)}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Category name={item} />;

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data.slice(0, 3));
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }, []);
  products.sort(
    (a, b) => parseFloat(b.rating.rate) - parseFloat(a.rating.rate),
  );
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      {/* Categories Container */}
      <View style={styles.topTitleContainer}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text
            style={styles.seeAll}
            onPress={() => {
              navigation.navigate('Categories');
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        {categories && categories.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => {
              return item;
            }}
            numColumns="3"
          />
        ) : (
          <ActivityIndicator size={'large'} color={Colors.primary} />
        )}
      </View>
      {/* Products Container */}
      <View style={styles.topTitleContainer}>
        <Text style={styles.title}>Top Products</Text>
        <TouchableOpacity>
          <Text
            style={styles.seeAll}
            onPress={() => {
              navigation.navigate('Products', {categoryName: 'All'});
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      {products && products.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products.slice(0, 5)}
          renderItem={({item}) => (
            <CustomProductItem
              title={item.title}
              rate={item.rating.rate}
              categoryOfProduct={item.category}
              price={item.price}
              image={item.image}
              onPress={() => {
                navigation.navigate('productDetails', {
                  id: item.id,
                  title: item.title,
                  descreption: item.description,
                  price: item.price,
                  categoryOfProduct: item.category,
                  image: item.image,
                  rate: item.rating.rate,
                });
              }}
            />
          )}
          keyExtractor={Item => Item.id}
        />
      ) : (
        <ActivityIndicator size={'large'} color={Colors.primary} />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondry,
    width: '100%',
    height: '100%',
    padding: 10,
    paddingBottom: 0,
  },
  topTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 11,
  },
  title: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: '700',
    lineHeight: 23,
    letterSpacing: 1,
  },
  seeAll: {
    color: Colors.primary,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 1,
    fontSize: 16,
  },
  // Categories Style
  categoriesContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // flex: 1
  },
  catergory: {
    flex: 1,
    // padding: 10,
    backgroundColor: Colors.white,
    height: height * 0.13,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  categoryName: {
    fontSize: 15,
    color: Colors.black,
    lineHeight: 19,
    fontWeight: '500',
    letterSpacing: 0.9,
  },
});
