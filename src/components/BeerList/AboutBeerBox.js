import React from 'react';
import { View, Text } from 'react-native'; 

const AboutBeerBox = () => {
    return (
        <View style={styles.aboutBeer}>
            <View style={styles.aboutBeerTop}>
                <View>
                    <Text style={styles.beerName}>Celebration Ale</Text>
                </View>
                <View>  
                    <Text style={styles.beerStyle}>FRESH HOP IPA</Text>
                </View>
                <View style={styles.horizontalRule} />
            </View>
            <View style={styles.aboutBeerDetails}>
                <View style={styles.aboutBeerDetail}>
                    <Text style={styles.beerDetailTextLabel}>ABV</Text>
                    <Text style={styles.beerDetailText}>6.8%</Text>
                </View>
                <View style={styles.aboutBeerDetail}>
                    <Text style={styles.beerDetailTextLabel}>IBUs</Text>
                    <Text style={styles.beerDetailText}>65</Text>
                </View>
                <View style={styles.aboutBeerDetail}>
                    <Text style={styles.beerDetailTextLabel}>AVAILABLE</Text>
                    <Text style={styles.beerDetailText}>Year-round</Text>
                </View>
                <View style={styles.aboutBeerDetail}>
                    <Text style={styles.beerDetailTextLabel}>RATING</Text>
                    <Text style={styles.beerDetailText}>3.78</Text>
                </View>
            </View>
        </View>
    );
};

const styles = {
     aboutBeer: {
        height: 150,
        width: 340,
        backgroundColor: '#ededed',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: 10,
        borderColor: '#fafafa',
        borderWidth: 3,
        flexDirection: 'column',
    },
    beerName: {
        fontSize: 30,
        fontWeight: '500',
        color: 'black'
    },
    beerStyle: {
        fontWeight: 'bold',
        color: '#696969'
    },
    aboutBeerTop: {
        alignItems: 'center',
    },
    aboutBeerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    aboutBeerDetail: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    beerDetailTextLabel: {
        color: '#696969',
        fontSize: 12
    },
    beerDetailText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    horizontalRule: {
        height: 1,
        width: 320,
        backgroundColor: 'black',
        marginTop: 15,
        marginBottom: 15
    }
};

export default AboutBeerBox;
