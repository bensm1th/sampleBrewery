import React, { Component } from 'react';
import { View, Image } from 'react-native';
import BeerListBottom from './BeerListBottom';
import AboutBeerBox from './AboutBeerBox';
import AboutBeerTab from './AboutBeerTab';
import RunDown from './RunDown';

class BeerList extends Component {
    state = {
        moreInfo: false
    }

    handleInfoPress() {
        this.setState({ moreInfo: !this.state.moreInfo });
    }

    renderBottom() {
        if (!this.state.moreInfo) {
            return <BeerListBottom />;
        }
        return <RunDown handleInfoPress={this.handleInfoPress.bind(this)} />;
    }

    renderTab() {
        if (!this.state.moreInfo) {
            return <AboutBeerTab text='MORE INFO' handleInfoPress={this.handleInfoPress.bind(this)} />;
        }
    }

    render() {
    const brewery = 'http://www.thegoodshoppingguide.com/wp-content/uploads/2013/03/beer.jpg';

        return (
            <Image
                style={styles.container}
                source={{ uri: brewery }}
            >
                <View>
                    <AboutBeerBox />
                    {this.renderTab()}
                </View>
                {this.renderBottom()}
            </Image>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: null,
        height: null,
        paddingTop: 50
    }
};

export default BeerList;

