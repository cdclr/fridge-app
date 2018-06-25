import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

class Groceries extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      testState: 1,
      data: [{
        color: 'blue',
        URL: 'www.google.com',
        text: 'TriHard'
      },{
        color: 'red',
        URL: 'www.google.com',
        text: 'TriHex'
      }]
    }

    const url = `https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id=${app_id}&app_key=${app_key}&page=0`;
    fetch(url)
    .then(response => response.json())
    .then(responseJson => {
    
      console.log(responseJson);
      this.setState({
        groceries: responseJson.hints
      });
    })
    .catch(e => console.log(e));
  }

  renderListItem(item) {
    return (
      <Text style={styles.renderListItem}>{item.item.food.label}</Text>
    );
  }

  render() {
    console.log(this.props.groceries);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.groceries}
          keyExtractor={item => item.food.id}
          renderItem={this.renderListItem}
        />
      </View>
    );
  }
}

class Fridge extends React.Component {

  render() {
    return (
      <View>
        
        <Text>Fridge</Text>
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

const app_id = '75bee68f';
const app_key = '12073d29a1d3ae462f733e8d6e90ae4f';

export default createBottomTabNavigator({
  Fridge: Fridge,
  Groceries: Groceries
});