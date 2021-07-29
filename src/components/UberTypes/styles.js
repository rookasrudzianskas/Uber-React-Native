import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    firstPart: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        // padding: 10,
        borderRadius: 30,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,

    },
    rounded: {
        marginRight: 20,
        backgroundColor: 'black',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    }
});

export default styles;
