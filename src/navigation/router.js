import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from "./Home";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Text, View} from "react-native";


const RouteNavigator = (props) => {

    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    const something = (props) => {
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>{props.name}</Text>
        </View>
    }


    return (

        <Drawer.Navigator initialRouteName="HomeNavigator">

            <Drawer.Screen name="Home" component={HomeNavigator} />
            {/*<Drawer.Screen name="Article" component={Article} />*/}

        </Drawer.Navigator>
    );

};

export default RouteNavigator;
