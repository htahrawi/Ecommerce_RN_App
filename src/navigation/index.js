import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ProductDetailsScreen,
  SignInScreen,
  SignUpScreen,
  SortedProductsScreen,
  SplashScreen,
} from '../screens/';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Colors from '../theme/Colors';

const Stack = createNativeStackNavigator();

const Navigation = props => {
  
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
          options={({navigation}) => ({
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
                  navigation.navigate('main', {screen: 'Home'});
                }}>
                <Image
                  source={require('../assets/icons/back.png')}
                  style={{width: 30, height: 17.5, marginLeft: 10}}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="sortedProducts"
          component={SortedProductsScreen}
          options={({navigation}) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTitleStyle: {
              color: Colors.white,
              fontSize: 20,
              lineHeight: 23,
            },
            title: props.route.categoryName,
            // title: "Husam Sorted",
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('main', {screen: 'Home'});
                }}>
                <Image
                  source={require('../assets/icons/back.png')}
                  style={{width: 30, height: 17.5, marginLeft: 10}}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
