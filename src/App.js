import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import Content from './Content';
import Menu from './Menu';
import ConnectedNavbar from './ConnectedNavbar';
import { openSideMenu, indexChange, recordCurrentIndex } from './actions';
import BeerList from './components/BeerList/BeerList';

class App extends Component {
    static renderNavigationBar(props) {
        return (
            <ConnectedNavbar />
        );
    }

    toggle() {
        this.props.openSideMenu();
    }

    swipe(target) {
        const index = this.swiper.state.index;
        const offset = target - index;
        this.swiper.scrollBy(offset);
        this.props.openSideMenu();
    }

    render() {
        const menu = <Menu {...this.props} swiper={this.swipe.bind(this)} />;
        return (
            <SideMenu 
                menu={menu}
                menuPosition='right'
                openMenuOffset={150}
                bounceBackOnOverdraw
                isOpen={this.props.isOpen}
                disableGestures
            >
                <Swiper
                    showsButtons={true}
                    style={styles.swiper}
                    showPagination
                    dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                    activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                    paginationStyle={{
                        bottom: 80
                    }}
                    ref={component => this.swiper = component} 
                >
                    <BeerList sceneStyle={{ paddingTop: 50 }}/>
                    <BeerList />
                    <BeerList />
                    <BeerList />
                    <BeerList />
                    <BeerList />
                    <BeerList />
                    <BeerList />
                    
                </Swiper>
            </SideMenu>
        );
    }
}

const styles = {
    swiper: {
        marginTop: 0
    }
};

const mapStateToProps = (state) => {
    const { isOpen } = state.sidemenu;
    return { 
        isOpen,
        swiperIndex: state.swiper.index,
        currentIndex: state.swiper.currentIndex
     };
};

export default connect(mapStateToProps, { openSideMenu, indexChange, recordCurrentIndex })(App);
