import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../../theme/Colors';
import {CustomButton, CustomProductItem} from '../../../components';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      {/* Categories Container */}
      <View style={styles.topTitleContainer}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        <View style={styles.catergory}>
          <Text style={styles.categoryName}>Electronic</Text>
        </View>
        <View style={styles.catergory}>
          <Text style={styles.categoryName}>Electronic</Text>
        </View>
        <View style={styles.catergory}>
          <Text style={styles.categoryName}>Electronic</Text>
        </View>
      </View>
      {/* Products Container */}
      <View style={styles.topTitleContainer}>
        <Text style={styles.title}>Top Products</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <CustomProductItem />
        <CustomProductItem />
        <CustomProductItem />
        <CustomProductItem />
        <CustomProductItem />
        <CustomProductItem />
      </ScrollView>
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
    justifyContent: 'center',
  },
  catergory: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
    height: height * 0.13,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 15,
    color: Colors.black,
    lineHeight: 19,
    fontWeight: '500',
    letterSpacing: 0.9,
  },
  // Product Styling
  topProductsContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  productContainer: {
    flexDirection: 'row',
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
    marginTop: 3,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    letterSpacing: 1,
    lineHeight: 16,
    marginTop: 4,
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
    marginRight: 10,
  },
  rate: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
