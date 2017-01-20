import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const AboutBeerTab = (props) => {
    const { text, handleInfoPress } = props;
    return (
        <View style={styles.moreInfo}>
            <View style={styles.moreInfoSectionLeft} />
            <TouchableHighlight onPress={() => handleInfoPress()}>
                <View style={styles.moreInfoTextSection}>
                    <Text style={styles.moreInfoDots}>. . .</Text>
                        <Text style={styles.moreInfoText}>{text}</Text>
                    <Text style={styles.moreInfoDots}>. . .</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.moreInfoSectionRight} />
        </View>
    );
};

const styles = {
    moreInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    moreInfoText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#ffffff',
    },
    moreInfoSectionLeft: {
        borderBottomLeftRadius: 5,
        backgroundColor: '#ea0b29',
        height: 5,
        flex: 1
    },
    moreInfoSectionRight: {
        borderBottomRightRadius: 5,
        backgroundColor: '#ea0b29',
        height: 5,
        flex: 1
    },
    moreInfoTextSection: {
        backgroundColor: '#ea0b29',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    moreInfoDots: {
        marginLeft: 5,
        marginRight: 5,
        paddingTop: -3,
        fontWeight: 'bold',
        textShadowColor: 'grey',
        textShadowRadius: 5
    }
};

export default AboutBeerTab;
