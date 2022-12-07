import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../theme/Colors';

const HomeScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={Colors.primary} />
      <Text>HomeScreen</Text>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({})