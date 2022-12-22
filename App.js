import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation';
import CartContextProvider from './src/store/context/cartContext';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <CartContextProvider>
        <Navigation />
      </CartContextProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
