import React from 'react';
import {Text, View} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>

            <View style={{backgroundColor: 'black'}}>

            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;
