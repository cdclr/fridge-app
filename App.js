import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Groceries from './components/Groceries.js';
import Fridge from './components/Fridge.js';

export default createBottomTabNavigator({
  Fridge: Fridge,
  Groceries: Groceries
});