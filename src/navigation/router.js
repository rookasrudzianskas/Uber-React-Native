import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View} from "react-native";

const RouteNavigator = () => {

    const Stack = createStackNavigator();

    function HomeScreen() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RouteNavigator;
