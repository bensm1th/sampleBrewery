import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class MenuItem extends Component {
    
    handlePress() {
        const { link } = this.props;
        link();
    }

    render() {
    const { icon, text, chevron } = this.props;
        return (
            <TouchableOpacity onPress={this.handlePress.bind(this)}>
                <View style={styles.bottomMenuItem}>
                    <View style={styles.iconWrapper}>
                        <Image
                            source={{ uri: icon }}
                            style={styles.iconStyle}
                        />
                    </View>
                    <View style={styles.menuItemTextWrapper}>
                        <Text style={styles.menuItemText}>{text}</Text>
                    </View>
                    <View style={styles.chevronWrapper}>
                        <Image
                            source={{ uri: chevron }}
                            style={styles.chevronStyle}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    iconWrapper: {
        marginLeft: 10,
        marginRight: 25,
    },
    iconStyle: {
        width: 30,
        height: 30,
    },
    chevronStyle: {
        width: 40,
        height: 40,
        justifyContent: 'flex-end'
    },
    chevronWrapper: {
        flexDirection: 'row'
    },
    bottomMenuItem: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'black',
        borderBottomColor: 'silver',
        borderTopColor: 'silver',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    menuItemText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600'
    },
    menuItemTextWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',   
        flex: 1
    }
};

export { MenuItem };
