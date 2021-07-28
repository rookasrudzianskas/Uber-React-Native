import React from 'react';
import {Text, TextInput, View} from "react-native";

const DestinationSearch = () => {
    return (
        <View>
            <TextInput placeholder="Current location" />
            <TextInput placeholder="Where to" />
        </View>
    );
};

export default DestinationSearch;
