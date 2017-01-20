import React from 'react';
import { View } from 'react-native';

const MenuContainer = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 5,
        borderWidth: 2,
    }
};

export { MenuContainer };
