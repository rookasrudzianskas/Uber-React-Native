import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";

const UberTypeRow = (props) => {

    const type = props;
    console.log(type.type);

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require("../../../assets/images/UberX.jpeg")} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type.type}{" "}

                    <Ionicons name="person" size={16} color="black" />

                    3
                </Text>

                <Text style={styles.time}>
                    8.03PM drop off
                </Text>
            </View>

            <View style={styles.rightContainer}>

                <Ionicons name="pricetag" size={18} color="#42d742" />

                <Text style={styles.price}>
                    est. ${type.price}
                </Text>

            </View>
        </View>
    );
};

export default UberTypeRow ;
