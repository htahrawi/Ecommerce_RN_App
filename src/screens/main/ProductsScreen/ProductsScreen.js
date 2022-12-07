import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../theme/Colors';

const ProductsScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={Colors.primary} />
      <Text>ProductsScreen</Text>
    </View>
  );
}

export default ProductsScreen

const styles = StyleSheet.create({})