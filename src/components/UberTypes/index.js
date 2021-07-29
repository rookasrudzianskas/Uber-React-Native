import React from 'react';
import {Text, View} from "react-native";
import UberTypeRow from "../UberTypeRow";
import typesData from "../../../assets/data/types";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import styles from "./styles";

const UberTypes = () => {

    console.log(typesData)
    return (
        <View>
            {typesData.map(type => <UberTypeRow key={type.id} type={type} />)}


            <View style={styles.container}>

                <View style={styles.firstPart}>
                    <View style={styles.rounded}>
                        <Ionicons name="ios-person" size={24} color="white" />
                    </View>
                    <MaterialIcons name="party-mode" size={24} color="black" />

                </View>

                <View style={styles.card}>
                    <Text styles={styles.text1}>Personal</Text>
                    <Text styles={styles.text2}>Visa 0037</Text>
                </View>

                <View style={styles.arrow}>
                    <Ionicons name="arrow-forward" size={24} color="black" />
                </View>
            </View>
        </View>
    );
};

export default UberTypes;
