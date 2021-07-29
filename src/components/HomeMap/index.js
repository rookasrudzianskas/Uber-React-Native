import React from 'react';
import {Text, View} from "react-native";
import MapView from 'react-native-maps';

const HomeMap = () => {
    return (
        // <View style={{height: 300, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>I am the map</Text>

        <View>
            <MapView
                style={{
                    flex: 1
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        </View>
        // </View>
    );
};

export default HomeMap;
