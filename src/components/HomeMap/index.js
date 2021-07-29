import React from 'react';
import {Dimensions, StyleSheet, Text, View} from "react-native";
import MapView from 'react-native-maps';
import styles from "./styles";

const HomeMap = () => {
    return (
        // <View style={{height: 300, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>I am the map</Text>

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
            </View>
    );
};

export default HomeMap;
