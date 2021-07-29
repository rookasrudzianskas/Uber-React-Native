import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View} from "react-native";
import HomeScreen from "../screens/HomeScreen";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import HomeNavigator from "./Home";

const RouteNavigator = (props) => {

    const Stack = createStackNavigator();


    return (
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
            </Stack.Navigator>
    );
};

export default RouteNavigator;
