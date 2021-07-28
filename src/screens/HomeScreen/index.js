import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage";
import HomeSearch from "../../components/HomeSearchComponent";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <HomeMap />

            <CovidMessage />

            <HomeSearch />
        </View>
    );
};

export default HomeScreen;
