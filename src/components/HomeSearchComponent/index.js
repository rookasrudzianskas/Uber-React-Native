import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import {AntDesign, Entypo, Feather} from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const HomeSearch = () => {
    return (
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Where To?</Text>

            <View style={styles.timeContainer}>
                <AntDesign name="clockcircle" size={24} color="#535353" />
                <Text style={{fontWeight: '600'}}>Now</Text>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="#535353" />

            </View>
        </View>
    );
};

export default HomeSearch;
