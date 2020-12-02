import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';

// stacks for the tabs
import HomeStack from './navigation/HomeStack';
import ActivityStack from './navigation/ActivityStack';
import { Images } from "./images/Images";

// pages for the stacks
import HomeScreen from './screens/Home/HomeScreen';
import MapView from './screens/Home/MapView';
import ActivityScreen from './screens/Activity/ActivityScreen';
import ActivityInfo from './screens/Activity/ActivityInfo';

const Stack = createStackNavigator;
const Tab = createBottomTabNavigator;

function App() {
  return (
    // <NavigationContainer>
      // {
        // <View
        //   style={{
        //     flex: 1,
        //     justifyContent: "center",
        //     alignItems: "center",
        //   }}
        // >
        //   <Text>Universal React with Expo</Text>
        // </View>

        // <Tab.Navigator
        //   initialRouteName="Feed"
        //   tabBarOptions={{
        //     activeTintColor: '#42f44b',
        //   }}>
        //   <Tab.Screen
        //     name="HomeStack"
        //     component={HomeStack}
        //     options={{
        //       tabBarLabel: 'Home',
        //       tabBarIcon: ({ color, size }) => (
        //         // <MaterialCommunityIcons
        //         //   name="home"
        //         //   color={color}
        //         //   size={size}
        //         // />
        //         <Image
        //           source={Images.Home}
        //           style={{
        //             width: 20,
        //             height: 20,
        //           }}
        //           // color={} 
        //           // size={}
        //         />
        //       ),
        //     }} />
        //   <Tab.Screen
        //     name="ActivityStack"
        //     component={ActivityStack}
        //     options={{
        //       tabBarLabel: 'Activity',
        //       tabBarIcon: ({ color, size }) => (
        //         <MaterialCommunityIcons
        //           name="view-list-outline"
        //           color="grey"
        //           size={3}
        //         />
        //       ),
        //     }} />
        // </Tab.Navigator>

        // <Tab.Navigator>
        //   <Tab.Screen name="Home" component={HomeStack} />
        //   <Tab.Screen name="Activity" component={ActivityStack} />
        // </Tab.Navigator>
        
      // }
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
