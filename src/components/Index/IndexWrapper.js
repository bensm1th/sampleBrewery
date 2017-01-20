import React from 'react';
import { View } from 'react-native';
import IndexMenu from './IndexMenu';
import IndexLogo from './IndexLogo';

const IndexWrapper = () => {
    return (
        <View style={styles.wrapperStyle}>
            <IndexLogo style={styles.logoStyle} />
            <IndexMenu style={styles.menuStyle} />
        </View>
    );
};

const styles = {
    menuStyle: {
        justifyContent: 'flex-end',
        flex: 1,
        flexDirection: 'column',
    },
    wrapperStyle: {
        backgroundColor: 'lightgrey',
        flex: 1,
        flexDirection: 'column',
    },
    logoStyle: {
        justifyContent: 'center'
    }
};

export default IndexWrapper;
