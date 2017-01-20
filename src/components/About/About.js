import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import BeerList from '../BeerList/BeerList';

class About extends Component {
    
    render() {
            return (
                <View style={styles.wrapper}>
                    <Swiper 
                        style={styles.swiper}
                        showPagination
                        dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                        activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                        paginationStyle={{
                        bottom: 80
                        }}
                    >
                        <BeerList />
                        <BeerList />
                        <BeerList />
                    </Swiper>
                </View>
            );
        }
}

const styles = {
    swiper: {
        marginTop: 0
    },
    wrapper: {
        alignItems: 'flex-start'
    }
};

export default About;
