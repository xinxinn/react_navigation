import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class ActivityScreen extends Component {
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
                    Activity Screen
                </Text>

                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={styles.button}>
                        <Text>
                            Activity Info
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

export default ActivityScreen;