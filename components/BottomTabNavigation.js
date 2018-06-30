import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MdcIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class BottomTabNavigation extends React.Component {

    render() {

        const tabs = this.props.tabData.map(tab => {

            return (
                <View key={tab.name} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={tab.onPress}>
                        <MdcIcon name={tab.icon} size={30} color={this.props.selectedTab === tab.name ? 'tomato' : 'grey'} />
                    </TouchableOpacity>
                </View>
            )
        });

        return (
            <View style={{ height: 65, alignSelf: 'stretch', flexDirection: 'row', backgroundColor: 'white', marginTop: 1 }}>
                {tabs}
            </View>
        )
    }
}