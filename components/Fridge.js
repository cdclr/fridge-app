import React from 'react';
import { View, Text, FlatList, Switch} from 'react-native';
import FoodItem from './FoodItem.js';

export default class Fridge extends React.Component {
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