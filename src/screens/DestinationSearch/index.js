import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from "react-native";
import styles from "./styles";

const DestinationSearch = (props) => {

    const [fromText, setFromText] = useState('');
    const [destinationText, setDestinationText] = useState('');


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput value={fromText} onChangeText={() => setFromText(text)} style={styles.textInput} placeholder="From" />
                <TextInput value={destinationText} onChangeText={() => setDestinationText(text)} style={styles.textInput} placeholder="Where to" />
            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;
