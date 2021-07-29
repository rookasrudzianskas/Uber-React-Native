import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const DestinationSearch = (props) => {

    const [fromText, setFromText] = useState('');
    const [destinationText, setDestinationText] = useState('');


    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);



    return (
        <SafeAreaView>
            <View style={styles.container}>

                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                        console.log(data, details);
                    }}
                    styles={{
                        textInput: styles.textInput,
                    }}
                    fetchDetails={true}
                    query={{
                        key: 'AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y',
                        language: 'en',
                    }}
                />


                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                        console.log(data, details);
                    }}
                    styles={{
                        textInput: styles.textInput,
                    }}
                    fetchDetails={true}
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

// in the process

// something new goes in here

