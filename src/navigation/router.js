import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from "./Home";
import { createDrawerNavigator } from '@react-navigation/drawer';


const RouteNavigator = (props) => {

    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();


    return (

        <Drawer.Navigator>

            <Drawer.Screen name="Home" component={HomeNavigator} />
            {/*<Drawer.Screen name="Article" component={Article} />*/}

        </Drawer.Navigator>
    );

};

export default RouteNavigator;
