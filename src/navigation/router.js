import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';

const RouteNavigator = () => {

    const Stack = createStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default RouteNavigator;
