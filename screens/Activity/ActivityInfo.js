import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ActivityInfo extends Component {
    render () {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    Activity Info
                </Text>
            </View>
        )
    }
}

export default ActivityInfo;