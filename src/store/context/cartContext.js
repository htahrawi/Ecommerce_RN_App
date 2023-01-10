// create cart provider context api
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext({
  cart: [],
  total: 0,
  loading: false,
  addToCart: (
    id,
    title,
    totalPrice,
    descreption,
    categoryOfProduct,
    image,
    price,
    quantity,
  ) => {},
  removeFromCart: id => {},
  getCart: () => {},
});

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const addToCart = (
    id,
    title,
    totalPrice,
    // descreption,
    categoryOfProduct,
    image,
    price,
    quantity,
  ) => {
    setCart(products => [
      ...products,
      {
        id,
        title,
        totalPrice,
        // descreption,
        categoryOfProduct,
        image,
        price,
        quantity,
      },
    ]);
  };
  // const updateQantity = (id, newQuantity) =>{
  //   setCart(products=> [
  //     ...products,
  //     {
  //     }
  //   ])
  // }
  console.log('cart IS ', cart);

  const removeFromCart = id => {
    setCart(products => products.filter(product => product.id != id));
  };

  const getCart = async () => {
    setLoading(true);
    try {
      const value = await AsyncStorage.getItem('cart');
      if (value !== null) {
        setCart(JSON.parse(value));
      }
    } catch (e) {
      console.log('error', e);
    }
    setLoading(false);
  };

  useEffect(() => {
    const getTotal = () => {
      if (cart.length > 0) {
        setTotal(
          cart.map(product => product.totalPrice).reduce((a, b) => a + b),
        );
      } else if (cart.length == 0) {
        setTotal(0);
      }
    };
    getTotal();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        loading,
        addToCart,
        removeFromCart,
        getCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
