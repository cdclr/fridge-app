import React from 'react';
import { Button, View, Text, FlatList, Switch} from 'react-native';
import FoodItem from './FoodItem.js';

export default class Fridge extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fridgeItems: {
          '0': { 
            key: '0',
            name: 'Apple',
            isSelected: false,
          },
          '1': {
            key: '1',
            name: 'Banana',
            isSelected: false,
          },
          '2': {
            key: '2',
            name: 'Cherry',
            isSelected: false,
          }
        },
      }
    }
  
    fridgeItemsToArray() {
      let arr = [];
      for (let key in this.state.fridgeItems) {
        arr.push(this.state.fridgeItems[key]);
      }
      return arr;
    }
    foodItem({item}) { 
      return (
        <FoodItem item={item}
        toggleItemSelect = {this.toggleItemSelect}
        />
      );
    }

    toggleItemSelect(itemKey) {
      let newFridgeItems = Object.assign({}, this.state.fridgeItems);
      newFridgeItems[itemKey].isSelected = !newFridgeItems[itemKey].isSelected;
      this.setState({fridgeItems: newFridgeItems});
    }
  
    render() {
  
      return (
        <View>
          <Button
            onPress = {() => {
              let newFridgeItems = Object.assign({}, this.state.fridgeItems);
              for (let key in this.state.fridgeItems) {
                console.log(this.state.fridgeItems[key]);
                if (this.state.fridgeItems[key].isSelected) {
                  delete newFridgeItems[key];
                }
              }
              console.log(newFridgeItems);
              this.setState({fridgeItems: newFridgeItems});
            }}
            title = "Remove Selected"
          />
          <FlatList
            data={this.fridgeItemsToArray()}
            renderItem={this.foodItem}
          />
          <Text>Fridge</Text>
        </View>
      )
    }
  }