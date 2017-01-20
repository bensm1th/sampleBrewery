import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const Menu = (props) => {
    return (
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    onPress={() => props.swiper(0)}
                > 
                    <Text style={styles.textStyle}>Item 1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    onPress={() => props.swiper(1)}
                > 
                    <Text style={styles.textStyle}>Item 2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    onPress={() => props.swiper(2)}
                > 
                    <Text style={styles.textStyle}>Item 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    onPress={() => props.swiper(3)}
                > 
                    <Text style={styles.textStyle}>Item 4</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    onPress={() => props.swiper(4)}
                > 
                    <Text style={styles.textStyle}>Item 5</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    onPress={() => props.swiper(5)}
                > 
                    <Text style={styles.textStyle}>Item 6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    onPress={() => props.swiper(6)}
                > 
                    <Text style={styles.textStyle}>Item 7</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <TouchableOpacity
                    onPress={() => props.swiper(7)}
                > 
                    <Text style={styles.textStyle}>Item 8</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
        </View>
    );
};
const styles = {
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    textStyle: {
        color: 'blue',
        fontSize: 15,
        paddingTop: 50,
        paddingBottom: 50
    },
    textContainer: {
        backgroundColor: 'white',
        width: 100,
        borderWidth: 5,
        borderColor: 'blue'
    }
};

export default Menu;
