import React from 'react';
import {Text, View} from "react-native";
import UberTypeRow from "../UberTypeRow";
import typesData from "../../../assets/data/types";

const UberTypes = () => {
    return (
        <View>
            {typesData.map(type => <UberTypeRow key={type.id} type={type} />)}
        </View>
    );
};

export default UberTypes;
