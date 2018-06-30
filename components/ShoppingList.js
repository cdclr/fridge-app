import React from 'react';
import { View, Text, FlatList, Switch, TouchableHighlight, StyleSheet} from 'react-native';
import FoodItem from './FoodItem.js';

export default class ShoppingList extends React.Component {    
    
      render() {
    
        return (
          <View>
            <FlatList
              data={this.props.shoppingListItems}
              renderItem={({item}) => (
                <TouchableHighlight 
                    onPress={() => {}}
                >
                    <Text style={styles.renderListItem} >
                        {item.food.label}
                    </Text>
                </TouchableHighlight>
              )}
              keyExtractor={item => item.food.id}
            />
          </View>
        )
      }
}

const styles = StyleSheet.create({
  renderListItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 1
  }
});