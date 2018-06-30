import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Groceries from './components/Groceries.js';
import Fridge from './components/Fridge.js';
import ShoppingList from './components/ShoppingList.js';
import BottomTabNavigation from './components/BottomTabNavigation.js';

class App extends React.Component {

  static navigationOptions = {
    title: 'fridge-app',
  };

  state = {
    fridgeItems: [],
    shoppingListItems: [],
    selectedTab: 'Search',
  }

  addShoppingListItem(item) {

    console.log('Item Added: ' + item.food.label);
    this.setState({shoppingListItems: [...this.state.shoppingListItems, item]});
  }

  render() {

    const tabData = [
      {
          name: 'Fridge',
          icon: 'fridge',
          onPress: () => { this.setState({selectedTab: 'Fridge'}) }
      },
      {
          name: 'Grocery List',
          icon: 'food-apple',
          onPress: () => { this.setState({selectedTab: 'Grocery List'}) }
      },
      {
          name: 'Search',
          icon: 'magnify',
          onPress: () => { this.setState({selectedTab: 'Search'}) }
      }
    ]

    const mainView = () => {
      if (this.state.selectedTab === 'Fridge') {
        return <Fridge />
      } else if (this.state.selectedTab === 'Grocery List') {
        return <ShoppingList shoppingListItems={this.state.shoppingListItems} />
      } else if (this.state.selectedTab === 'Search') {
        return <Groceries addShoppingListItem={(item) => this.addShoppingListItem(item)} />
      }
    }

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          {mainView()}
        </View>
        <BottomTabNavigation tabData={tabData} selectedTab={this.state.selectedTab} />
      </View>
    )
  }
}

// const TabNavigation = createBottomTabNavigator(
//   {
//     Fridge: Fridge,
//     'Grocery List': ShoppingList,
//     Search: Groceries
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Search') {
//           iconName = `magnify`;
//         } else if (routeName === 'Fridge') {
//           iconName = `fridge`;
//         } else if (routeName === 'Grocery List') {
//           iconName = `food-apple`;
//         }

//         return <MdcIcon name={iconName} size={25} color={tintColor} />;
//       }
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
// });

export default createStackNavigator(
  {
    App: {
      screen: App
    }
  }
);