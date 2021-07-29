import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import styles from "./styles";
import cars from "../../../assets/data/cars";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_API_KEY = "AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y";

const RouteMap = (props) => {

    const {type} = props;
    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    }

    const destination = {
        latitude: 28.456208,
        longitude: -16.259098,
    }


    return (

                <MapView
                    style={{width: '100%', height: "100%"}}
                    provider="google"
                    initialRegion={{
                        // latitude: 37.78825,
                        // longitude: -122.4324,
                        latitude: 28.450627,
                        longitude: -16.263045,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        apikey={"AIzaSyBmXijpsVGRk39hnHdg6aWoeZ_Uaj81B-Y"}
                        strokeWidth={6}
                        strokeColor="black"
                    />


                        <Marker
                            coordinate={origin}
                            title={"Origin"}
                        >
                        </Marker>


                        <Marker
                            coordinate={destination}
                            title={"Destination"}
                        >
                        </Marker>



                </MapView>
            // </View>
    );
};

export default RouteMap;

// enabled
