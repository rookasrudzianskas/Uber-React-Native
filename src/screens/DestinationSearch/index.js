import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from "react-native";
import styles from "./styles";

const DestinationSearch = (props) => {

    const [fromText, setFromText] = useState('');
    const [destinationText, setDestinationText] = useState('');


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
