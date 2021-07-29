import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import styles from "./styles";

const HomeMap = () => {
    return (
        // <View style={{height: 300, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>I am the map</Text>

            // <View style={styles.container}>
                <MapView
                    style={{width: '100%', height: "100%"}}
                    provider="google"
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >

                    <Marker coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324 }}
                        // image={require("../../../assets/images/top-UberX.png")}
                    >
                        <Image source={require("../../../assets/images/top-UberX.png")} style={{height: 70, width: 70, resizeMode: 'contain' }}/>
                    </Marker>

                </MapView>
            // </View>
    );
};

export default HomeMap;
