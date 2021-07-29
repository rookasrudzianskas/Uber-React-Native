import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles";

const UberTypeRow = () => {
    return (
        <View>

            <Image style={styles.image} source={require("../../../assets/images/UberX.jpeg")} />
            <View style={styles.middleContainer}>

            </View>

            <View style={styles.rightContainer}>

            </View>
        </View>
    );
};

export default UberTypeRow ;
