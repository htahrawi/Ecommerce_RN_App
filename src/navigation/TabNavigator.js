import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CartScreen,
  CategoriesScreen,
  HomeScreen,
  ProductDetailsScreen,
  ProductsScreen,
  ProfileScreen,
} from '../screens';
import Colors from '../theme/Colors';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => {
          return null;
        },
        tabBarStyle: {
          borderTopLeftRadius: 17,
          borderTopRightRadius: 17,
          backgroundColor: Colors.white,
          height: 56,
          elevation: 5,
          borderWidth: 0,
          // opacity: 
        },
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
                // props.navigation.navigate('main', {screen: 'Home'});
            }}>
            <Image
              source={require('../assets/icons/back.png')}
              style={{width: 30, height: 17.5, marginLeft: 10}}
            />
          </TouchableOpacity>
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <Image
              source={
                props.focused
                  ? require('../assets/icons/homeActive.png')
                  : require('../assets/icons/home.png')
              }
              style={[
                {width: 25, height: 25},
                props.focused ? styles.activeIcon : null,
              ]}
            />
          ),
          headerLeft: ()=>{}
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: props => (
            <Image
              source={
                props.focused
                  ? require('../assets/icons/categoriesActive.png')
                  : require('../assets/icons/categories.png')
              }
              style={[{width: 25}, props.focused ? {height: 32} : {height: 25}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductsScreen}
        options={{
          tabBarIcon: props => (
            <Image
              source={
                props.focused
                  ? require('../assets/icons/productActive.png')
                  : require('../assets/icons/products.png')
              }
              style={[
                props.focused
                  ? styles.activeIcon
                  : {width: 25.02, height: 25.5},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: props => (
            <Image
              source={
                props.focused
                  ? require('../assets/icons/cartActive.png')
                  : require('../assets/icons/cart.png')
              }
              style={[{width: 29}, props.focused ? {height: 32} : {height: 25}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: props => (
            <Image
              source={
                props.focused
                  ? require('../assets/icons/profileActive.png')
                  : require('../assets/icons/profile.png')
              }
              style={[{width: 25}, props.focused ? {height: 32} : {height: 25}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  activeIcon: {
    width: 25,
    height: 32,
  },
  inActiveIcon: {
    width: 25,
    height: 25,
  },
});
