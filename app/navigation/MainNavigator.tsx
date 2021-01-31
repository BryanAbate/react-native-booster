import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../containers/HomeScreen";

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default MainNavigator;