import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../theme/Colors';

const CartScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={Colors.primary} />
      <Text>CartScreen</Text>
    </View>
  );
}

export default CartScreen

const styles = StyleSheet.create({})