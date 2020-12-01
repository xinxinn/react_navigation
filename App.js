import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      {
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Universal React with Expo</Text>
        </View>
      }
    </NavigationContainer>
  );
}
