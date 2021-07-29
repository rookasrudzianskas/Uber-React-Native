import React from 'react';
import {Dimensions, Text, View} from "react-native";
import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";

const SearchResults = () => {
    return (
        <View style={{justifyContent: 'space-between'}}>


            <View style={{height: Dimensions.get('window').height - 550}}>
                <HomeMap/>
            </View>

            <View style={{height: 550}}>
                <UberTypes />
            </View>
        </View>
    );
};

export default SearchResults;
