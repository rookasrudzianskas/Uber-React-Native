import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import DestinationSearch from "../screens/DestinationSearch";

const RouteNavigator = (props) => {

    const Stack = createStackNavigator();

    function Something() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
    return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={DestinationSearch}  options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
    );
};

export default RouteNavigator;
