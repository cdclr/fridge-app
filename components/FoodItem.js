import React from 'react';
import { Button, View, Text, FlatList, Switch } from 'react-native';

export default class FoodItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Switch
                    onValueChange = {() => {
                        console.log(this.props);
                        this.props.toggleItemSelect(this.props.item.key);
                    }}
                    value = {this.props.item.isSelected}
                />
                <Text>{this.props.item.name}</Text>
            </View>
        )
    };
}