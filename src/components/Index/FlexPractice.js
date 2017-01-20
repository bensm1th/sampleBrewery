import React from 'react';
import { View } from 'react-native';
import TopTab from './TopTab';
import IndexLogo from './IndexLogo';
import IndexMenu from './IndexMenu';

const FlexPractice = () => {
    return (
        <View style={styles.wrapperStyle}>
            <TopTab text='new beers' />
            <IndexLogo logo='https://12welveeyes.com/wp-content/uploads/12EYES_Crest-Logo_Light.png' />
            <IndexMenu />
        </View>
    );
};

const styles = {
    wrapperStyle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'forestgreen'
    }
};

export default FlexPractice;

