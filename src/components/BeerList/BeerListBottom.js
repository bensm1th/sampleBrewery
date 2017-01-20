import React from 'react';
import { View, Text, Image } from 'react-native';

const BeerListBottom = () => {
    const label = 'http://beerstreetjournal.com/wp-content/uploads/Sierra-Nevada-Celebration-2014-960x822.jpg';

    return (
        <View style={styles.label}>
            <View>
                <View>
                    <Image 
                        style={styles.labelImage}
                        source={{ uri: label }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = {
    label: {
        alignItems: 'center',
        marginTop: 15
    },
    labelImage: {
        height: 250,
        width: 250
    },
};

export default BeerListBottom;

