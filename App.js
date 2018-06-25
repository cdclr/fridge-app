import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import FoodItem from './components/FoodItem.js';
import Groceries from './components/Groceries.js';

class Fridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fridgeItems: [{
        key: '0',
        name: 'Apple',
        isChecked: false,
      },
      {
        key: '1',
        name: 'Banana',
        isChecked: false,
      },
      {
        key: '2',
        name: 'Cherry',
        isChecked: false,
      }],
    };
  }

  foodItem({item}) {
      
    return (
      <FoodItem item={item} />
    );
  }


  render() {

    return (
      <View>
        <FlatList
          data={this.state.fridgeItems}
          renderItem={this.foodItem}
        />
        <Text>Fridge</Text>
      </View>
    )
  }
}

export default createBottomTabNavigator({
  Fridge: Fridge,
  Groceries: Groceries
});