import React from 'react';
import {Pressable, Text, View} from "react-native";
import UberTypeRow from "../UberTypeRow";
import typesData from "../../../assets/data/types";
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import styles from "./styles";

const UberTypes = () => {

    const confirm = () => {
        console.log("Clicked")
    }

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
                    <Text styles={{fontWeight: 'bold', fontSize: 20,}}>Personal</Text>
                    <Text styles={styles.text2}>Visa 0037</Text>
                </View>

                <View style={styles.arrow}>
                    <Ionicons name="arrow-forward" size={24} color="black" />
                </View>
            </View>

            <Pressable onPress={confirm} style={styles.button}>
                <Text style={styles.confirm}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    );
};

export default UberTypes;
