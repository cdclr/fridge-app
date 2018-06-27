import React from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, TouchableHighlight } from 'react-native';

const app_id = '75bee68f';
const app_key = '12073d29a1d3ae462f733e8d6e90ae4f';

export default class Groceries extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            groceries: [],
        }
    }

    sendFoodQuery() {

        const url = encodeURI(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.searchQuery}&app_id=${app_id}&app_key=${app_key}&page=0`);
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            
            console.log(responseJson);
            this.setState({
                groceries: responseJson.hints
            });
        })
        .catch(e => console.error(e));
    }

    render() {
        return (
        <View style={{ flex: 1 }}>
            <View style={styles.searchbox} >
                <TextInput
                    style={styles.searchboxInput}
                    underlineColorAndroid="transparent"
                    placeholder="red apple"
                    onChangeText={value => this.setState({searchQuery: value})}
                    onEndEditing={() => this.sendFoodQuery()}
                />
            </View>
            <FlatList
                data={this.state.groceries}
                keyExtractor={item => item.food.id}
                renderItem={({item}) => (
                    <TouchableHighlight 
                        onPress={() => {
                            console.log(item);
                        }}
                    >
                        <Text style={styles.renderListItem} >
                            {item.food.label}
                        </Text>
                    </TouchableHighlight>
                )}
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
    },

    searchbox: {
        padding: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },

    searchboxInput: {
        borderRadius: 4,
        backgroundColor: 'white',
        fontSize: 20,
        padding: 10
    }
});