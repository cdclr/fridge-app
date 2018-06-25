import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Groceries from './components/Groceries.js';
import Fridge from './components/Fridge.js';
import ShoppingList from './components/ShoppingList.js';

export default createBottomTabNavigator({
  Fridge: Fridge,
  ShoppingList: ShoppingList,
  Groceries: Groceries
});