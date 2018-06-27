import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import MdcIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Groceries from './components/Groceries.js';
import Fridge from './components/Fridge.js';
import ShoppingList from './components/ShoppingList.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fridgeItems: [],
      shoppingListItems: [],
    }
  }

  static navigationOptions = {
    title: 'fridge-app',
  };

  // addShoppingListItem(item) {

  //   console.log(item);
  //   this.fridgeItems.push(item);
  // }

  // removeShoppingListItem(item) {


  // }

  render() {
    return (
      <TabNavigation addShoppingListItem={() => this.addShoppingListItem(item)} />
    )
  }
}

const TabNavigation = createBottomTabNavigator({
  Fridge: Fridge,
  'Grocery List': ShoppingList,
  Search: Groceries
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Search') {
        iconName = `magnify`;
      } else if (routeName === 'Fridge') {
        iconName = `fridge`;
      } else if (routeName === 'Grocery List') {
        iconName = `food-apple`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <MdcIcon name={iconName} size={25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

export default createStackNavigator({
  App: App
});