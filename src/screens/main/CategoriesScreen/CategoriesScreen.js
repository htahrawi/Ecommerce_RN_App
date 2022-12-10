import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../../theme/Colors';

const DATA = [
  {
    id: '123',
    name: 'Electronic',
  },
  {
    id: '456',
    name: 'Shoes',
  },
  {
    id: '789',
    name: 'Food',
  },
  {
    id: '012',
    name: 'Electronic',
  },
  {
    id: '345',
    name: 'Clothes',
  },
  {
    id: '678',
    name: 'Gold',
  },
  {
    id: '901',
    name: 'Electronic',
  },
];
const Item = ({name}) => (
  <TouchableOpacity style={styles.category}>
    <Text style={styles.title}>{name}</Text>
  </TouchableOpacity>
);
const CategoriesScreen = () => {
  const renderItem = ({item}) => <Item name={item.name} />;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <FlatList
        showsVerticalScrollIndicator= {false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={Item => Item.id}
        numColumns="2"
      />
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
    paddingVertical: 0
  },
  category: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    width: '45%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: Colors.primary,
    fontWeight: '600'
  }
});
