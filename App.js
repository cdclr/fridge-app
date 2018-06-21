import React from 'react';
import { Text, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      groceries: [{
        key: 'Bananas',
      },{
        key: 'Oranges',
      },{
        key: 'Apples',
      },{
        key: 'Milk',
      }]
    };
  }
  
  
  render() {
    
    return (
      <FlatList
        data={this.state.groceries}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    );
  }
};


