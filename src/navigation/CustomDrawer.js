import React from 'react';
import {Pressable, Text, View} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {Entypo} from "@expo/vector-icons";


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>

            <View style={{backgroundColor: 'black', padding: 20,}}>

                <View style={{borderTopWidth: 1, borderColor: '#212121', borderBottomWidth: 1}}>
                    <Pressable onPress={() => console.log("Make Money Driving")}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: '#dddddd', fontSize: 18, paddingVertical: 5,}}>Messages</Text>
                            <Entypo style={{marginLeft: 10}}name="dot-single" size={27} color="Azure" />
                        </View>
                    </Pressable>
                </View>

                <Pressable onPress={() => console.log("Account")}>
                    <Text style={{color: '#dddddd', fontSize: 18, paddingVertical: 5,}}>Do more with your account</Text>
                </Pressable>

                <Pressable onPress={() => console.log("Make Money Driving")}>
                    <Text style={{color: 'white', fontSize: 18, paddingVertical: 5,}}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;
