import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from "./placeRow";
import * as Location from "expo-location";
import {useNavigation} from "@react-navigation/native";


const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [position, setPosition] = useState(null);

    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
    };
    const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
    };
    const navigation = useNavigation();


    useEffect(() =>  {
        // fires everytime the origin place and destination place changes
        if(originPlace && destinationPlace) {
            // navigation
            navigation.navigate('SearchResults');
        }
    }, [originPlace, destinationPlace]);

    useEffect(() =>  {
        // this does something magical, but it works
        Location.installWebGeolocationPolyfill();
        navigator.geolocation.getCurrentPosition(setPosition);
    }, []);


    return (
        <SafeAreaView>
            <View style={styles.container}>

                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details});
                        // console.log(data, details);
                    }}
                    currentLocation={true}
                    currentLocationLabel={"Current location"}
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
                    predefinedPlaces={[homePlace, workPlace]}
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                />


                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({data, details});
                        // console.log(data, details);
                    }}
                    predefinedPlaces={[homePlace, workPlace]}
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

