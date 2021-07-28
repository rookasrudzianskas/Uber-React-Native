import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const DestinationSearch = (props) => {

    const [fromText, setFromText] = useState('');
    const [destinationText, setDestinationText] = useState('');


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput value={fromText} onChangeText={() => setFromText(text)} style={styles.textInput} placeholder="From" />
                <TextInput value={destinationText} onChangeText={() => setDestinationText(text)} style={styles.textInput} placeholder="Where to" />

                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y',
                        language: 'en',
                    }}
                />

            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;

