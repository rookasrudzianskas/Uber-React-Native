import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,

    },

    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: "#434343",
    },
    timeContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: 110,
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 50,
        color:"#535353",
    },

    row: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',

    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25,
    },
    destinationText: {

    },
});

export default styles;
