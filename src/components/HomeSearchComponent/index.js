import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import {Feather} from "@expo/vector-icons";

const HomeSearch = () => {
    return (
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Where To?</Text>

            <View style={styles.timeContainer}>
                <Feather name="clock" size={24} color="black" />

            </View>
        </View>
    );
};

export default HomeSearch;
