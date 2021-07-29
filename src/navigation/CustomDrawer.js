import React from 'react';
import {Pressable, Text, View} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {Entypo} from "@expo/vector-icons";


const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>

            <View style={{backgroundColor: 'black', padding: 20,}}>

                <View style={{marginBottom: 20,}}>
                    <View style={{backgroundColor: '#cacaca', width: 60, height: 60, borderRadius: 30,}}>

                    </View>

                </View>

                <View style={{borderTopWidth: 1, borderColor: '#212121', borderBottomWidth: 1}}>
                    <Pressable onPress={() => console.log("Make Money Driving")}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: '#dddddd', fontSize: 22, paddingVertical: 18, }}>Messages</Text>
                            <Entypo style={{marginLeft: 3}} name="dot-single" size={27} color="#00AFF8FF" />
                        </View>
                    </Pressable>
                </View>

                <Pressable onPress={() => console.log("Account")}>
                    <Text style={{color: '#dddddd', fontSize: 18, paddingVertical: 5, marginTop: 15}}>Do more with your account</Text>
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
