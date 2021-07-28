import React from 'react';
import {SafeAreaView, Text, TextInput, View} from "react-native";
import styles from "./styles";

const DestinationSearch = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput style={styles.textInput} placeholder="From" />
                <TextInput style={styles.textInput} placeholder="Where to" />
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;
