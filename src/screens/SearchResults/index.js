import React from 'react';
import {Text, View} from "react-native";
import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";

const SearchResults = () => {
    return (
        <View>
           <HomeMap/>
            <UberTypes />
        </View>
    );
};

export default SearchResults;
