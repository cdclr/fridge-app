import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class FridgeApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      groceries: []
    };

    const url = `https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id=${app_id}&app_key=${app_key}&page=0`;
    fetch(url)
    .then(response => response.json())
    .then(responseJson => {
    
      this.setState({
        groceries: responseJson.hints
      })
    })
    .catch(e => console.log(e));
  }

  static navigationOptions = {
    title: 'fridge-app'
  }

  static renderListItem(item) {
    return (
      <Text style={styles.renderListItem}>{item.item.food.label}</Text>
    );
  }

  render() {
    console.log(this.state.groceries);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.groceries}
          renderItem={FridgeApp.renderListItem}
        />
      </View>
    );
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


// https://api.edamam.com/search?app_id=508cb3d6&app_key=6dadfad538c6dab8170d0227a830eab8&q=chicken+cucumber
export default createStackNavigator({
  FridgeApp: {
    screen: FridgeApp
  },
});