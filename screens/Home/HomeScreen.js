import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    marginTop: 50,
                    fontSize: 25
                }}>
                    Home Screen
                </Text>

                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={styles.button}>
                        <Text>
                            Map
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#242424",
        padding: 10,
        width: 100,
        marginTop: 16
    }
})

export default HomeScreen;