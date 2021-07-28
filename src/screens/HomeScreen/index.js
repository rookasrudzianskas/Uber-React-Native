import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import HomeMap from "../../components/HomeMap";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HomeMap />
        </View>
    );
};

export default HomeScreen;
