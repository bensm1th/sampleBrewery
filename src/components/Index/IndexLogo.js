import React from 'react';
import { Image, View } from 'react-native';

const IndexLogo = ({ logo }) => {
    return (
        <View style={styles.topStyle}>
            <Image 
                source={{ uri: logo }}
                style={styles.logoStyle}
            />
        </View>
    );
};

const styles = {
    topStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logoStyle: {
        width: 325,
        height: 175,
        marginTop: 20
    }
};

export default IndexLogo;
