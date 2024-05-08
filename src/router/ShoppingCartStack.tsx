import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import ShoopingCartScreen from '../screens/ShoopingCartScreen';
import AddressScreen from '../screens/AddressScreen';
import ShopingCartScreen from '../screens/ShoppigCartScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen
        component={ShopingCartScreen}
        name="cart"
        options={{title: 'Shopping Cart'}}
      />
      <Stack.Screen
        component={AddressScreen}
        name="Address"
        options={{title: 'Address'}}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;