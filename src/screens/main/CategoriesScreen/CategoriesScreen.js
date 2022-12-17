import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../../theme/Colors';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

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

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const [Data, setData] = useState([]);
  const Item = ({name}) => (
    <TouchableOpacity
      style={styles.category}
      onPress={() => {
        navigation.navigate('Products', {categoryName: name});
      }}>
      <Text style={styles.title}>{toUpperCaseChar(name)}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }, []);
  const renderItem = ({item}) => <Item name={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      {Data && Data.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => {
            return item;
          }}
          numColumns="2"
        />
      ) : (
        <ActivityIndicator size={'large'} color={Colors.primary} />
      )}
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.secondry,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  category: {
    // padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    width: '45%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: '600',
  },
});
