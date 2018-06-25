import React from 'react';
import { StyleSheet, View, TextInput, FlatList, Text } from 'react-native';

const app_id = '75bee68f';
const app_key = '12073d29a1d3ae462f733e8d6e90ae4f';

export default class Groceries extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
        groceries: [],
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
            <TextInput 
                value='woop'
                onChangeText={this.handleInputChange}
            />
            <FlatList
                data={this.state.groceries}
                keyExtractor={item => item.food.id}
                renderItem={this.renderListItem}
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