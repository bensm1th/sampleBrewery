import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { increment } from './actions';

class MyNavBar extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} title='Button' onPress={this.props.increment}>
                <Text style={styles.textStyle}> CLICK </Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        borderColor: 'red',
        borderWidth: 3,
        backgroundColor: 'tan',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    textStyle: {
        fontSize: 30,
        color: 'red'
    }
}

export default connect(null, { increment })(MyNavBar); 