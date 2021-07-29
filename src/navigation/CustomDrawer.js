import React from 'react';
import {Text, View} from "react-native";
import { DrawerContentScrollView } from '@react-navigation/drawer';


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Text>Rokas</Text>
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;
