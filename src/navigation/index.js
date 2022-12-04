import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SignInScreen, SplashScreen } from '../screens/'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {headerShown: false}
        }
      >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="signIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation

const styles = StyleSheet.create({})