import React from 'react';
import { View, Text, FlatList, Switch } from 'react-native';

export default class FoodItem extends React.Component {
    render() {
        return (
            <View>
                <Switch/>
                <Text>{this.props.item.name}</Text>
            </View>
        )
    };
}