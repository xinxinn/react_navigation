import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class MapView extends Component {
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
                    Map View
                </Text>
            </View>
        )
    }
}

export default MapView;