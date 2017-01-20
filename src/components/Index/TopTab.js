import React from 'react';
import { View, Text } from 'react-native';

const TopTab = ({ text }) => {
    return (
        <View style={styles.tabStyle}>
            <View style={styles.tabButton}>
                <Text style={styles.tabTextStyle}>{text}</Text>
            </View>
        </View>
    );
};

const styles = {
    tabStyle: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    tabButton: {
        height: 30,
        width: 65,
        backgroundColor: 'rgb(250, 175, 25)',
        justifyContent: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingRight: 2,
        paddingLeft: 2
    },
    tabTextStyle: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center'
    },
};

export default TopTab;

