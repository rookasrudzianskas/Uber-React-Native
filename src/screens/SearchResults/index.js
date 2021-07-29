import React from 'react';
import {Dimensions, Text, View} from "react-native";
import UberTypes from "../../components/UberTypes";
import RouteMap from "../../components/RouteMap";
import {useRoute} from "@react-navigation/native";




const SearchResults = (props) => {

    const route = useRoute();
    console.log("🚀",route.props);

    return (
        <View style={{justifyContent: 'space-between'}}>


            <View style={{height: Dimensions.get('window').height - 550}}>
                <RouteMap/>
            </View>

            <View style={{height: 550}}>
                <UberTypes />
            </View>
        </View>
    );
};

export default SearchResults;
