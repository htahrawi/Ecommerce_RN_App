import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HomeScreen, ProductDetailsScreen, ProfileScreen, SignInScreen, SignUpScreen, SplashScreen} from '../screens/';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Colors from '../theme/Colors';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="signIn" component={SignInScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="main" component={TabNavigator} />
        <Stack.Screen
          name="productDetails"
          component={ProductDetailsScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTitleStyle: {
              color: Colors.white,
              fontSize: 20,
              lineHeight: 23,
            },
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  // props.navigation.navigate('TabNavigaftor');
                }}>
                <Image
                  source={require('../assets/icons/back.png')}
                  style={{width: 30, height: 17.5, marginLeft: 10}}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
