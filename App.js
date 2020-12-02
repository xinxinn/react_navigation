import 'react-native-gesture-handler';
import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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


/**
 * default function when set up
 */
// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {/* <Text>Universal React with Expo</Text> */}
//       <Text>Home</Text>
//     </View>
//   )
// }


/**
 * to show the bottom tab and can switch through tabs 
 * ERROR I got: Attempted import error: ‘shouldUseActivityState’ is not exported from ‘react-native-screens’
 */
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Feed"
//         tabBarOptions={{
//           activeTintColor: '#42f44b',
//         }}>
//         <Tab.Screen
//           name="HomeStack"
//           component={HomeStack}
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color, size }) => (
//               // <MaterialCommunityIcons
//               //   name="home"
//               //   color={color}
//               //   size={size}
//               // />
//               <Image
//                 source={Images.Home}
//                 style={{
//                   width: 20,
//                   height: 20,
//                 }}
//               // color={} 
//               // size={}
//               />
//             ),
//           }} />
//         <Tab.Screen
//           name="ActivityStack"
//           component={ActivityStack}
//           options={{
//             tabBarLabel: 'Activity',
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="view-list-outline"
//                 color="grey"
//                 size={3}
//               />
//             ),
//           }} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App();


/**
 * showing tab without tab styling (also failed)
 */
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeStack} />
//         <Tab.Screen name="Activity" component={ActivityStack} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

/**
 * run this to show just the home stack
 * ERROR I got: TypeError: Super expression must either be null or a function
 * 
 * Component Exception
 * Error: Element type is invalid: expected a string (for built-in components) or a class/function 
 * (for composite components) but got: undefined. You likely forgot to export your component from 
 * the file it's defined in, or you might have mixed up default and named imports.
 * Check the render method of `App`.
 */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}