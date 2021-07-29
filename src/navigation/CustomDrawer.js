import React from 'react';
import {Pressable, Text, View} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>

            <View style={{backgroundColor: 'black', padding: 20,}}>

                <Pressable onPress={() => console.log("Make Money Driving")}>
                    <Text style={{color: 'white'}}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;
