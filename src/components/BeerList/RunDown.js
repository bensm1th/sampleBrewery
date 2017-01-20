import React from 'react';
import { Text, View, Image } from 'react-native';
import AboutBeerTab from './AboutBeerTab';

const RunDown = (props) => {
    const label = 'http://www.cdn.sierranevada.com/sites/www.sierranevada.com/files/content/beers/celebrationreg/sup-ale/cele-bottle-pint.png';

    return (
        <View>
            <View style={styles.rundownBox}>
                <View style={styles.leftColumn}>
                    <Image source={{ uri: label }} style={styles.smallLabel} />
                </View>
                <View style={styles.rightColumn}>
                    <Text style={styles.rightLabel}>THE RUNDOWN</Text>
                    <Text style={styles.rightContent}>The start of Celebration season is a festive event. We can’t start brewing until the first fresh hops have arrived, but once they have the season is officially under way! First brewed in 1981, Celebration Ale is one of the earliest examples of an American-style IPA and one of the few hop-forward holiday beers. Famous for its intense citrus and pine aromas, Celebration is bold and intense, featuring Cascade, Centennial and Chinook hops—honoring everything we have at Sierra Nevada.</Text>
                </View>
            </View>
            <AboutBeerTab text='CLOSE' handleInfoPress={props.handleInfoPress} />
        </View>
    );
};

const styles = {
    rundownBox: {
        height: 331,
        width: 340,
        backgroundColor: '#ededed',
        borderColor: '#fafafa',
        borderWidth: 3,
        flexDirection: 'row',
    },
    smallLabel: {
        height: 120,
        width: 80,
        margin: 10
    },
    leftColumn: {
        flexDirection: 'column'
    },
    rightColumn: {
        flexDirection: 'column'
    },
    rightLabel: {
        marginTop: 5,
        marginBottom: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    rightContent: {
        flexWrap: 'wrap',
        width: 200
    }
};

export default RunDown;
