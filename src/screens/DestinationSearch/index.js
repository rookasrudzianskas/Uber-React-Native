import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from "./placeRow";
import * as Location from "expo-location";


const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() =>  {
        // fires everytime the origin place and destination place changes
        if(originPlace && destinationPlace) {
            // navigation
        }
    }, [originPlace, destinationPlace]);

    // live location things 👇

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    console.log(text);

    // end of live location thing 👆



    return (
        <SafeAreaView>
            <View style={styles.container}>

                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details});
                        // console.log(data, details);
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autoCompleteContainer,
                        listView: styles.listView,
                        separator: styles.separator,
                    }}
                    fetchDetails={true}
                    query={{
                        key: 'AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                />


                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                        // console.log(data, details);
                    }}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        container: {
                            ...styles.autoCompleteContainer,
                            top: 55, },
                        separator: styles.separator,


                    }}
                    fetchDetails={true}
                    query={{
                        key: 'AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y',
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}

                />

                <View style={styles.circle} />
                <View style={styles.line} />
                <View style={styles.square} />



            </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;

// in the process

// something new goes in here

