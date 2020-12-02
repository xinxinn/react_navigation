import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ActivityScreen from '../screens/Activity/ActivityScreen';
import ActivityInfo from '../screens/Activity/ActivityInfo';

class ActivityStack extends Component {

    render() {

        const Stack = createStackNavigator;

        return (
            <Stack.Navigator
                initialRouteName="Activity"
                screenOptions={{
                    headerStyle: { backgroundColor: '#42f44b' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' }
                }}
            >
                <Stack.Screen
                    name="Activity"
                    component={ActivityScreen}
                    options={{ title: 'Activity Page' }} />
                <Stack.Screen
                    name="Info"
                    component={ActivityInfo}
                    options={{ title: 'Activity Info Page' }} />
            </Stack.Navigator>
        )
    }
}

export default ActivityStack;