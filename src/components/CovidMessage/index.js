import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles";

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>Help flatten the curve. If you must travel, please exercise caution for your safety and the safety of our community.</Text>
            <Text style={styles.learnMore}>Learn more ▶️</Text>
        </View>
    );
};

export default CovidMessage;
