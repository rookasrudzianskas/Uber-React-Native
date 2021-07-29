import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";

const RouteNavigator = () => {
    return (
        <NavigationContainer>
            <HomeScreen />
        </NavigationContainer>
    );
};

export default RouteNavigator;
