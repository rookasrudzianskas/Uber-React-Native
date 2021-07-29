import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";

const UberTypeRow = () => {
    return (
        <View>

            <Image style={styles.image} source={require("../../../assets/images/UberX.jpeg")} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    UberX

                    <Ionicons name="person" size={24} color="black" />
                </Text>
            </View>

            <View style={styles.rightContainer}>

            </View>
        </View>
    );
};

export default UberTypeRow ;
