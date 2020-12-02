import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/HomeScreen';
import MapView from '../screens/Home/MapView';

class HomeStack extends Component {

    render() {

        const Stack = createStackNavigator;

        return (
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: '#42f44b' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' }
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home Page' }} />
                <Stack.Screen
                    name="Map"
                    component={MapView}
                    options={{ title: 'Map Page' }} />
            </Stack.Navigator>
        )
    }
}

export default HomeStack;