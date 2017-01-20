import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        marginTop: 35,
        marginBottom: 15
    }
};

export { Container };
