import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../theme/Colors';

const ProfileScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={Colors.primary} />
      <Text>ProfileScreen</Text>
    </View>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({})