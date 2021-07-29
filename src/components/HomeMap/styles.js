import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default styles;
