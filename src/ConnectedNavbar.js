import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { openSideMenu } from './actions';

class ConnectedNavbar extends Component {
    render() {
        return (
            <TouchableOpacity 
                style={styles.container} 
                title='Button' 
                onPress={this.props.openSideMenu}
            >
                <Image style={styles.imageStyle} source={{ uri: 'http://alexandstein.com/resources/images/icons/hamburger.png' }} />
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'brown'
    },
    textStyle: {
        fontSize: 30,
        color: 'red'
    },
    imageStyle: {
        height: 50,
        width: 50
    }
};

export default connect(null, { openSideMenu })(ConnectedNavbar); 
