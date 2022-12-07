import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../theme/Colors';

const CategoriesScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={Colors.primary} />
      <Text>CategoriesScreen</Text>
    </View>
  );
}

export default CategoriesScreen

const styles = StyleSheet.create({})