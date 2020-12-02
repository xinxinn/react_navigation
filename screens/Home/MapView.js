import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function MapView({ navigation }) {
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

            <View>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Text>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backBtn: {
        width: 300,
        backgroundColor: "blue",
        alignItems: "center",
        padding: 10,
        marginTop: 16
    }
})

export default MapView;