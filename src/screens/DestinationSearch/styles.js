import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%',
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft: 40,
        // marginTop: -10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: "#a2a2a2",
        padding: 7,
        borderRadius: 50,
        marginRight: 15,

    },
    locationText: {

    },
    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },
    listView: {
        position: 'absolute',
        top: 92,
    },
    autoCompleteContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
    },
    circle: {

    },
    line: {

    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 80,
        left: 23,
    }

});

export default styles;
