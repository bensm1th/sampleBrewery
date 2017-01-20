import React from 'react';
import { Text } from 'react-native';
import SideMenu from 'react-native-side-menu';

const BeerEvents = () => {
    return (
        <SideMenu style={styles.wrapper}>
            <Text>Beer Events 1</Text>
            <Text>Beer Events 2</Text>
            <Text>Beer Events 3</Text>
            <Text>Beer Events 4</Text>
            <Text>Beer Events 5</Text>
        </SideMenu>
    );
};

const styles = {
    wrapper: {
        backgroundColor: 'red'
    }
};

export default BeerEvents;

