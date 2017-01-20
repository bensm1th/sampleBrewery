import React from 'react';
import { View, Text } from 'react-native';

const Content = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>{props.text.one}</Text>
            <Text style={styles.aboutStyle}>{props.text.two}</Text>
            <Text style={styles.textStyle}>{props.text.three}</Text>
        </View>
    );
};

const styles = {
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'blue',
        paddingBottom: 50
    },
    textStyle: {
        color: 'white',
        fontSize: 15
    },
    headerStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white'
    },
    aboutStyle: {
        fontSize: 25,
        color: 'white'
    }
};

export default Content;

