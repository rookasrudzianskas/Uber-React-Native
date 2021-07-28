import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import {AntDesign, Entypo, Feather} from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const HomeSearch = () => {
    return (
        <View>
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Where To?</Text>

            <View style={styles.timeContainer}>
                <AntDesign name="clockcircle" size={24} color="#535353" />
                <Text style={{fontWeight: '600'}}>Now</Text>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="#535353" />
            </View>
        </View>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name="clockcircle" size={20} color="#ffffff" />
                </View>

                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name="home" size={20} color="#ffffff" />
                </View>

                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>

        </View>

    );
};

export default HomeSearch;
